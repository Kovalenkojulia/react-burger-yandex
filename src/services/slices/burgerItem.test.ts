import burgerItemReducer, { initialState, openModal, closeModal } from './burgerItemSlice';

describe('burgerItem reducer', () => {
    it('should return the initial state', () => {
        expect(burgerItemReducer(undefined, {type: 'unknown'})).toEqual(initialState);
    });

    it('should handle openModal', () => {
        const newState = burgerItemReducer(initialState, openModal());
        expect(newState.isModalOpened).toBe(true);
    });

    it('should handle closeModal', () => {
        const newState = burgerItemReducer({ isModalOpened: true }, closeModal());
        expect(newState.isModalOpened).toBe(false);
    });
});
