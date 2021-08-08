import { useState } from "react";
import BlogList from "./BlogList";


const Home = props => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'loremmmasdma', author:'mario', id:'1' },
        { title: 'Welcome Party', body: 'loremmmasdma', author:'fikri', id:'2' },
        { title: 'Web Developer', body: 'loremmmasdma', author:'tama', id:'3' }
    ]);
    return (
        <div className="home">
          <BlogList blogs={blogs} title="All Blogs"/>
        </div>
      );
}
 
export default Home;
