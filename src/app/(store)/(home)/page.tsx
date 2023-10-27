const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <div>Hello World</div>
}

export default Home
