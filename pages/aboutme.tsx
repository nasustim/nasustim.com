type Props = {
  data: String
}

const AboutMe = (props: Props) => <div>{props.data}Me</div>

export async function getServerSideProps() {
  return { 
    props: { 
      data: 'about'
    } 
  }
}

export default AboutMe