export const initialState = {
    user: null,
    playlists:[],
    playing:false,
    //token: 'BQCroz6D8cvh9T0fIH4YYdrMhXH64mYJK2cRRs66en8p1xnamsCe3NXqsZ1s0h67OqkH7byWhpKzHY3mtW22oGfN2TTZzw-1kDT2zCfdHaCyxLG6WqmJsM7fqQ5LShpTY1A1HDULjfr3n2_kR2V9vf57wrsVG44-eRmgC9LDEG1egfMi',
    item:null,
};

const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            };
            
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }




            default:
                return state;
    }

}


export default reducer;