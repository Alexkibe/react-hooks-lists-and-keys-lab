import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const tags = links.map((value) => {
    return <a key={value} href={"#"+value}>{value}</a>
  })
  console.log(tags)
  
  return <nav>{tags/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
