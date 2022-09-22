export const state = () => {
    return {
        order: {
            dishTitle: '',
            dishImage: '',
            dishDesc:'',
            selectedDrinks: [],
            orderDate: null,
            amountOfPeople: 1,
            orderEmail: '',
            isUpdating: false
        }
    }
}

export const mutations = {
    setOrder(state, {key, value}) {
        state.order[key] = value 
    },
    setUpdateOrder(state, value) {
        state.order = value 
    },
}

