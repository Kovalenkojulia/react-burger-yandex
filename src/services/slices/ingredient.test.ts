   import reducer, {setActiveIngredient, resetActiveIngredient} from './ingredient'
   test("should set active ingredient", () => {
       const initialState = {
           ingredient: null,
       };

       expect(
           reducer(
               initialState,
               setActiveIngredient({
                   _id: "643d69a5c3f7b9001cfa093d",
                   name: "Флюоресцентная булка R2-D3",
                   type: "bun",
                   proteins: 44,
                   fat: 26,
                   carbohydrates: 85,
                   calories: 643,
                   price: 988,
                   image: "https://code.s3.yandex.net/react/code/bun-01.png",
                   image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                   image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",

               })
           )
       ).toEqual({
           ingredient: {
               _id: "643d69a5c3f7b9001cfa093d",
               name: "Флюоресцентная булка R2-D3",
               type: "bun",
               proteins: 44,
               fat: 26,
               carbohydrates: 85,
               calories: 643,
               price: 988,
               image: "https://code.s3.yandex.net/react/code/bun-01.png",
               image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
               image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",

           },
       });
   });

   test("should reset active ingredient", () => {
       const initialState = {
           ingredient: {
               _id: "643d69a5c3f7b9001cfa093d",
               name: "Флюоресцентная булка R2-D3",
               type: "bun",
               proteins: 44,
               fat: 26,
               carbohydrates: 85,
               calories: 643,
               price: 988,
               image: "https://code.s3.yandex.net/react/code/bun-01.png",
               image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
               image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
           },
       };

       expect(reducer(initialState, resetActiveIngredient())).toEqual({
           ingredient: null,
       });
   });
