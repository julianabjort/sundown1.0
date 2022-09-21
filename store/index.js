export const state = () => {
    return {
        dishTitle: '',
        order: {
            dishTitle: '',
            dishImage: '',
            dishDesc:'',
            selectedDrinks: [],
            orderDate: null,
            amountOfPeople: null,
            orderEmail: ''
        }
    }
}

export const mutations = {
    
    setOrder(state, {key, value}) {
        state.order[key] = value 
    },
   
}