import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Escolha um impacto positivo! Aprenda a fazer de forma simples a gestão de resíduos em cada cômodo de sua casa. 
          Faça o download gratuito do nosso guia completo e descubra segredos que poucos conhecem."
          paragraph="Últimos artigos e e-books"
          center
          width="800px"
          mb="60px"
        />

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"> */}
        <div className="mx-auto sm:w-100">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
