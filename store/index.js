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

export const getters = {
    dishCompleted: (state) => state.order.dishTitle && state.order.dishImage && state.order.dishDesc ? true : false,
    orderCompleted: (state) => state.order.orderDate && state.order.amountOfPeople && state.order.orderEmail ? true : false,
}

