import reducer, {
    addIngredient,
    removeFilling,
    sortIngredients,
    resetConstructor,
    IIngredientsConstructorState,
    initialState
} from './burgerConstructorSlice'
import {bunIngredient, fillingIngredient, luminousFillet, meteorite, fallenFruits, FILLINGS } from '../../utils/constants'

test('should add bun ingredient', () => {
    const initialState: IIngredientsConstructorState = {
        fillings: [],
        bun: null,
        counters: {},
    };
    const newBunIngredient = { ...bunIngredient, price: 1000 };
    expect(
        reducer(
            initialState,
            addIngredient(newBunIngredient)
        )
    ).toEqual({
        fillings: [],
        bun: newBunIngredient,
        counters: {
            [newBunIngredient._id]: 2,
        },
    });
});

test('should add filling ingredient', () => {
    const initialState: IIngredientsConstructorState = {
        fillings: [],
        bun: null,
        counters: {},
    };

    expect(
        reducer(
            initialState,
            addIngredient(fillingIngredient)
        )
    ).toEqual({
        fillings: [
            fillingIngredient,
        ],
        bun: null,
        counters: {
            [fillingIngredient._id]: 1,
        },
    });
})


test('Should sort fillings', () => {
    const initialState: IIngredientsConstructorState = {
        fillings: [
           luminousFillet, meteorite, fallenFruits
        ],
        bun: {
            ...bunIngredient
        },
        counters: {
            '643d69a5c3f7b9001cfa093e': 1,
            '643d69a5c3f7b9001cfa0940': 1,
            '643d69a5c3f7b9001cfa0947': 1,
            '643d69a5c3f7b9001cfa093d': 2,
        },
    }

    expect(
        reducer(
            initialState,
            sortIngredients({
                dragIndex: 2,
                hoverIndex: 1,
            })
        )
    ).toEqual({
        fillings: [
            luminousFillet, fallenFruits, meteorite
        ],
        bun: {
           ...bunIngredient
        },
        counters: {
            '643d69a5c3f7b9001cfa093e': 1,
            '643d69a5c3f7b9001cfa0940': 1,
            '643d69a5c3f7b9001cfa0947': 1,
            '643d69a5c3f7b9001cfa093d': 2,
        },
    })
})

test('Should reset constructor', () => {
    const initialState: IIngredientsConstructorState = {
        fillings: [],
        bun: null,
        counters: {},
    }

    const givenState: IIngredientsConstructorState = {
        fillings: [
            ...FILLINGS
        ],
        bun: {
            ...bunIngredient
        },
        counters: {
            '643d69a5c3f7b9001cfa093e': 1,
            '643d69a5c3f7b9001cfa0940': 1,
            '643d69a5c3f7b9001cfa0947': 1,
            '643d69a5c3f7b9001cfa093d': 2,
        },
    }

    expect(reducer(givenState, resetConstructor())).toEqual(initialState)
})
