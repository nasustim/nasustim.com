type Props = {
  data: String
}

const Index = (props: Props) =>
 <div>{props.data}</div>

export async function getServerSideProps() {
  return { 
    props: { 
      data: 'index'
    } 
  }
}

export default Index