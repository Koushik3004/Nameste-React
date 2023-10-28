import {CDN_URL} from "../utils.js/cosntant"

console.log("CDN",CDN_URL);

const ItemList = ({ item }) => {
  console.log("newprops", item);
  return (
    <div>
      {item.map((item) => {
        return(
        <div key={item.card.info.id}
        className="w-9/12 border-gray-400 border-b-2 text-left flex justify-between">
            <div>
          <div className="py-2">
            <span>{item.card.info.name} </span>
            <span>- ₹ {item.card.info.price/100} </span>
        
           
           </div>
           <p className="text-xs">{item.card.info.description}</p>
        </div>
        <div className="w-4/12 p-4">
            <div className="absolute ">
       
        <button className="px-0.1 px-0.1 bg-black text-white shadow-lg m-auto">Add +</button>
        </div>
        <img src={CDN_URL + item.card.info?.imageId} className="w-full"/>
        </div>
       

        </div>
        )
      })}
    </div>
  );
};

export default ItemList;
