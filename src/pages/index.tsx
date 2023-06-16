import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Container>
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-2xl mx-auto">
            {/*<header>*/}
            {/*  <h2 className="text-3xl font-bold mb-4">Hello, World!</h2>*/}
            {/*  <p className="text-gray-500">*/}
            {/*    Published on <time dateTime="2023-06-07">June 7, 2023</time> by*/}
            {/*    John Doe*/}
            {/*  </p>*/}
            {/*</header>*/}

            <a className="w-full my-7 hover:-translate-x-1.5">
              <div className="font-medium text-xs text-gray-400">data</div>
              <div className={`font-extrabold text-2xl mt-2`}>제목입니다.</div>
              <div className={`font-medium text-gray-600 text-xl mt-1`}>
                설명
              </div>
            </a>

            {/*<section className="mt-8">*/}
            {/*  <p>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
            {/*    Vestibulum tristique risus id justo efficitur interdum. Morbi id*/}
            {/*    felis id libero suscipit ullamcorper vel vel neque. Mauris sed*/}
            {/*    felis in orci cursus lacinia non vel dui. Ut aliquam nunc vitae*/}
            {/*    sapien dapibus, non ultricies urna tincidunt. Nulla facilisi.*/}
            {/*    Donec fringilla metus ac suscipit hendrerit. Cras finibus*/}
            {/*    ultrices cursus.*/}
            {/*  </p>*/}
            {/*  <p>*/}
            {/*    Quisque in ligula ultrices, fermentum lectus non, aliquet massa.*/}
            {/*    Aliquam erat volutpat. Mauris scelerisque velit ut quam*/}
            {/*    ullamcorper, id pharetra ligula eleifend. Proin consectetur*/}
            {/*    lectus sit amet ipsum consequat, sed faucibus sapien luctus.*/}
            {/*    Nulla sit amet dui id lorem fringilla efficitur. Donec*/}
            {/*    consectetur, enim et efficitur pellentesque, metus metus*/}
            {/*    lobortis mi, in gravida lacus purus vitae justo. Suspendisse in*/}
            {/*    ipsum consectetur, cursus enim ut, congue risus. Fusce sed urna*/}
            {/*    magna. Aenean eu tortor sit amet quam luctus fermentum. Nam eu*/}
            {/*    orci id metus auctor aliquam eu non sem.*/}
            {/*  </p>*/}
            {/*</section>*/}
            {/*<aside className="mt-8 p-4 bg-gray-100">*/}
            {/*  <h3 className="text-lg font-semibold mb-2">About the Author</h3>*/}
            {/*  <p>*/}
            {/*    John Doe is a web developer with a passion for writing blog*/}
            {/*    posts about web development, programming, and technology.*/}
            {/*  </p>*/}
            {/*</aside>*/}
          </article>
        </main>
      </Container>

      {/*<footer className="bg-gray-200 py-4">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <p className="text-center text-gray-500">*/}
      {/*      © 2023 My Blog. All rights reserved.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </>
  );
}
