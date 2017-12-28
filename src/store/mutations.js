import * as types from './mutation-types'

export const mutations = {
  [types.SET_CONTACTS] (state, contacts_payload) {
    state.contacts = contacts_payload;
  },
  [types.TOGGLE_VIEW_CONTACT] (state) {
    state.view_contact = !state.view_contact;
  },
  [types.SET_VIEW_TRANSITION] (state, view_transition) {
    state.view_transition = view_transition;
  },
  [types.TOGGLE_ADD_CONTACT] (state) {
    state.add_contact = !state.add_contact;
  },
  [types.TOGGLE_EDIT_CONTACT](state){
    state.edit_contact = !state.edit_contact;
  },
  [types.TOGGLE_DRAWER] (state) {
    state.drawer = !state.drawer;
  },
  [types.TOGGLE_SEARCH] (state) {
    state.search = !state.search;
  },
  [types.SET_SELECTED] (state, selected_payload) {
    state.selected = selected_payload;
  },
  [types.SET_ACTIVE_ID] (state, active_id) {
    state.active_id = active_id;
  },
  [types.TOGGLE_STAR] (state, id) {
    let contact = state.contacts.find((contact) => {
      return contact.id === id;
    });
    contact.starred = !contact.starred;
  },
  [types.SET_TOOLTIPS] (state) {
    state.tooltips = Modernizr.touchevents;
  }
};