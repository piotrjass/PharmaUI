importItems$ = createEffect(() => this.actions$.pipe(
    ofType(ItemActions.loadItems),
    mergeMap(() => this.itemService.getItems().pipe(      
      map((_) => {
        var helper = new Helper()
        // async operations
        validItems = helper.loadValidItems()
        invalidItems = helper.loadInalidItems()
        // save to reducer
        return ItemActions.loadItemsSuccess({validItems,invalidItems})

      })
    ))
  ));
}

importItems$ = createEffect(() => this.actions$.pipe(
    ofType(ItemActions.loadItems),
    mergeMap(() => this.itemService.getItems().pipe(      
      map((_) => {
        var helper = new Helper()
        // async operations
        Promise.all([
              validItems = helper.loadValidItems()
        invalidItems = helper.loadInalidItems()
        ]).then(() => {
            return ItemActions.loadItemsSuccess({validItems,invalidItems})
        })
      
        // save to reducer

      })
    ))
  ));
}