import { Link } from "react-router-dom";

const CategoryItem = ({name,href,backgroundColor,color}) =>{
    const style ={
        backgroundColor:backgroundColor,
        color:color,
        borderColor:color
    }
    return(
        <Link to={href}>
            <div className=" rounded-full uppercase px-6 py-2  text-center" style={style}>
                {name}
            </div>
        </Link>
    )
}

const CategoryList = () => {

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <CategoryItem name='entrees' href='/categories/entrees'  backgroundColor='#f0f5c4' color='#59871f'/>
      <CategoryItem name='break fast' href='/categories/breakfast'  backgroundColor='#efedfa' color='#3c3a8f'/>
      <CategoryItem name='lunch' href='/categories/lunch'  backgroundColor='#f0f5c4' color='#223834'/>
      <CategoryItem name='entrees' href='/categories/entrees'  backgroundColor='#f0f5c4' color='#1f8787'/>
      <CategoryItem name='desserts' href='/categories/desserts'  backgroundColor='#f0f5c4' color='#59871f'/>
      <CategoryItem name='drinks' href='/categories/drinks'  backgroundColor='#ffeae3' color='#f0493e'/>
    </div>
  );
};

const CatagoryWarpper = () => {
  return (
    <div>
      <CategoryList></CategoryList>
    </div>
  );
};

export default CatagoryWarpper;
