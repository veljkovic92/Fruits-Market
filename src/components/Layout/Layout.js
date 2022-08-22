import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <section>
      <MainHeader />
      <main>{props.children}</main>
    </section>
  );
};

export default Layout;
