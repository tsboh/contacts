import * as types from './mutation-types'


export const setContacts = ({commit}, contacts_payload) => {
  commit(types.SET_CONTACTS, contacts_payload);
};

export const toggleViewContact = ({commit}) => {
  commit(types.TOGGLE_VIEW_CONTACT);
};

export const setViewTransition = ({commit}, view_transition) => {
  commit(types.SET_VIEW_TRANSITION, view_transition);
};

export const toggleAddContact = ({commit}) => {
  commit(types.TOGGLE_ADD_CONTACT);
};

export const toggleEditContact = ({commit}) => {
  commit(types.TOGGLE_EDIT_CONTACT);
};

export const toggleDrawer = ({commit}) => {
  commit(types.TOGGLE_DRAWER);
};

export const toggleSearch = ({commit}) => {
  commit(types.TOGGLE_SEARCH);
};

export const setSelected = ({commit}, selected_payload) => {
  commit(types.SET_SELECTED, selected_payload);
};

export const setActiveId = ({commit}, active_id) => {
  commit(types.SET_ACTIVE_ID, active_id);
};

export const toggleStar = ({commit}, id) => {
  commit(types.TOGGLE_STAR, id);
};

export const setTooltips = ({commit}) => {
  commit(types.SET_TOOLTIPS);
};