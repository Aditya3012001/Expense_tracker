var key = "9569fda64ec6c325f26d8c88be919946";
var base_url = "http://data.fixer.io/api/";

const currenyCaller = async () => {
  let res = await fetch(`${base_url}+ "?access_key=" + ${key}`);
  console.log(res);
};

export default currenyCaller;
