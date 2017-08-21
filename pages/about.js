import Layout from '../components/layout'
import stylesheet from '../styles/about/a.scss'

export default () => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    This is <div className="hello-about">about</div>
  </Layout>
)