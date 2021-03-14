import types from './mutation_types'
export default {
    deleteNote({ commit }, payload) {
        commit(types.DELETE_NOTE, payload);
    },
    newNote({ commit }, payload) {
        commit(types.NEW_NOTE, payload);
    }
}