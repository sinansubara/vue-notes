import types from './mutation_types'
export default {
    [types.DELETE_NOTE](state, payload) {
        state.notes.splice(payload, 1);
    },
    [types.NEW_NOTE](state, payload) {
        state.notes = [...state.notes, payload];
    }
}