const INITIAL_STATE = {
  contactData: null,
  isLoading: false,
  isError: false,

  // contacts: []
};

// INITIAL_STATE.isError = false; -> mutable change ❌

// const NEW_STATE = { -> immutable change ✅
//     ...INITIAL_STATE,
//     isError: false
// }

export const ContactDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/setContactData": {
      return { ...state, contactData: action.payload };
    }
    case "contacts/setIsLoading": {
      return { ...state, isLoading: action.payload };
    }
    case "contacts/setIsError": {
      return { ...state, isError: action.payload };
    }

    // как в ДЗ
    case "contacts/addContact": {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
