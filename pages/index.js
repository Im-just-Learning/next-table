import Layout from '../layout/dashboardLayout'

export default function Page() {
  return {
    /** Your content */
  }
}

Page.getLayout = function getLayout(page) {
  return (
      <Layout>
          {page}
      </Layout>
  )
}