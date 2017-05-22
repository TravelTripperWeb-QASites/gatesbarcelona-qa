(function() {
  angular
    .module('rezTrip', ['ui.date'], function($interpolateProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
    })
    .value('rt3api', new Rt3Api({
      portalId: 'diagonalhotelbarcelona',
      hotelId: 'DIAGNL',
      defaultLocale: $("#siteLang").val().toLowerCase() || 'en',

      defaultCurrency: 'EUR'
    }))
   .config(function($locationProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
      });
    })

    .directive('onSearchChanged', function (rt3Search) {
      return {
        scope: false,
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.$watch('search.params', function (params) {
            if (params.arrival_date && params.departure_date) {
              scope.$eval(attrs.onSearchChanged);
            }

          }, true);

          scope.$eval(attrs.onSearchChanged);
        }
      };
    })

    .directive("owlCarousel", function() {
      return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
          scope.initCarousel = function(element) {
            // provide any default options you want
            var defaultOptions = {
            };
            var customOptions = scope.$eval($(element).attr('data-options'));
            // combine the two options objects
            for(var key in customOptions) {
              defaultOptions[key] = customOptions[key];
            }
            // init carousel
            $(element).owlCarousel(defaultOptions);
          };
        }
      };
    })
    .directive('owlCarouselItem', [function() {
      return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
          if(scope.$last) {
            scope.initCarousel(element.parent());
          }
        }
      };
    }])
    .controller('roomDetail', ['$scope', 'rt3Search', 'rt3Browser','$timeout','$filter', function($scope, rt3Search, rt3Browser,$timeout, $filter) {
        window.onhashchange = function() {
          window.location.reload();
        }
        $scope.reloadPage = function(){window.location.reload();}
        $timeout(function() {
           var roomsList = JSON.parse($("#roomList").val());
           var roomId = window.location.hash.substr(1); //$("#roomId").val();
           var roomSizeSqm, tmpName;
           var roomSizeSqft;
           for(var j= 0 ; j < roomsList.length ; j++){
             rName = $filter('formatNameForLink')(roomId);
             tmpName = $filter('formatNameForLink')(roomsList[j].name);

               if(rName == tmpName ){
                  // find room size for diff size units

                  if(roomsList[j].room_size_units == 'sqft'){
                      roomSizeSqm = roomsList[j].room_size / 10.764 ;
                      roomsList[j]['room_size_sqm'] = Math.round(roomSizeSqm) + " sq m";
                      roomsList[j]['room_size_sqft'] = roomsList[j].room_size + " " + " sq ft";
                  }else if(roomsList[j].room_size_units == 'sqm'){
                      roomSizeSqft = roomsList[j].room_size * 10.764 ;
                      roomsList[j]['room_size_sqft'] = Math.round(roomSizeSqft) + " sq ft";
                      roomsList[j]['room_size_sqm'] = roomsList[j].room_size + " sq m" ;
                  }

                  $scope.selectedRoom = roomsList[j];

                  // find previous and next rooms name
                  if(j > 0){
                     $scope.prevRoomName = roomsList[j-1].name;
                  }

                  if(j < roomsList.length -1){
                     $scope.nextRoomName = roomsList[j+1].name;
                  }
                  break;
               }
           }

        }, 2800);

    }])

    .controller('bookingWidget', ['$scope', 'rt3Search', 'rt3Browser', function($scope, rt3Search, rt3Browser) {
      var self = this;

      this.arrivalOptions = {
        minDate: 0
      }
      this.departureOptions = {
        minDate: 1
      }
      // Todo move to service
      this.chachgeMinDate = function(target) {
        var today = new Date().getDate();
        var arr = new Date($scope.search.params.arrival_date).getDate();
        var arrm = new Date($scope.search.params.arrival_date).getMonth();
        var gettonightstatus= rt3Browser.roomsTonight.length;
        if(gettonightstatus == 0)
        {
          $(".price").hide();
        }
       // console.log(gettonightstatus);
        if (target == 'departure') {
          //self.departureOptions.minDate = (arr-today) + 1;
          var dept= new Date($scope.search.params.arrival_date);
          var theDay=new Date(dept.setDate(dept.getDate() + 1));
          self.departureOptions.minDate=(theDay.getDate()-today+1);
          var newDay=theDay.toISOString().slice(0,10);
          $scope.search.params.departure_date=newDay;
          //console.log("departure"+newDay)
          rt3Browser.getdiff=false;



        }

         if(target == 'depart')
        {


         var date1 = new Date($scope.search.params.arrival_date);
        var date2 = new Date($scope.search.params.departure_date);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());

        var diffDays = Math.ceil(timeDiff / (1000*3600*24));

        if(diffDays >=2)
        {
          rt3Browser.getdiff=true;
        }

        }
      }
    }])
    .controller('offerDetail', ['$scope', 'rt3Search', 'rt3Browser','$timeout','$filter', function($scope, rt3Search, rt3Browser,$timeout,$filter) {
      window.onhashchange = function() {
        window.location.reload();
      }
        $scope.reloadPage = function(){$window.location.reload();}
        $timeout(function() {
           var oList = JSON.parse($("#offerList").val());
           var oName = window.location.hash.substr(1); //$("#offerId").val();
           var tmpName;
           for(var j= 0 ; j < oList.length ; j++){
                oName = $filter ('formatNameForLink')(oName);
                tmpName = $filter ('formatNameForLink')(oList[j].rate_plan_name);
               if(tmpName == oName){
                  // find previous and next rooms name
                  if(j > 0){
                     $scope.prevOfferName = oList[j-1].rate_plan_name;
                  }

                  if(j < oList.length -1){
                     $scope.nextOfferName = oList[j+1].rate_plan_name;
                  }
                  break;
               }
           }

        }, 2800);

        

    }]) 
})();
