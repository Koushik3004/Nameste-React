const RestaurantCatagory=(props)=>{
    console.log("props",props.data);
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
                <span className="font-bold text-lg">{props.data.title } ({props.data.itemCards.length})</span>
                 <span>⬇️</span> 

            </div>
        </div>
    )

}

export default RestaurantCatagory;