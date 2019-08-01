const items = (state = getDefaultItems(), action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.data
      ]
      case 'ADD_ITEMS':
        return [
          ...action.data
        ]  
    default:
      return state
  }
};

function getDefaultItems() {
  const params = new URLSearchParams(window.location.hash.split("?")[1]);
  const items = Array.from(params.entries()).filter(item => item[0] === 'item').map(item => item[1]);
  return items;
};

export default items;