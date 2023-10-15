const RestaurantCatagory=(props)=>{
    console.log("props",props);
    return(
        <div>
            <div className="w-6/12 mx-auto my-6 bg-gray-50">
                <span>{props.data.title}</span>
                {/* <span>‘:smile’ </span> */}

            </div>
        </div>
    )

}

export default RestaurantCatagory;