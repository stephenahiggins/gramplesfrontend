  $scope._loadMore = function(limit) {
      console.log("Load More Called");
      console.log('Limit: ', limit); 
      $scope.lastpage +=1;
      console.log('Last Page: ', $scope.lastpage); 

      getGramples.all($scope.lastpage).then(function(promise){
          $scope.gramples = promise.data; 
          //console.log('Data: ',promise); 
          if (promise.grample_count_high < promise.grample_count){
               $scope.noMoreItemsAvailable = false;
          } else {
              $scope.noMoreItemsAvailable = true;
          }
            $scope.$broadcast('scroll.infiniteScrollComplete');
      });
  }; 