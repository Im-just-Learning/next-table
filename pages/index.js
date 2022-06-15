import DashboardLayout from "../layout/dashboardLayout";

export default function Page() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                  <div className="lg:flex lg:items-center">
                      <div className="lg:flex-auto">
                          <h1 className="text-xl font-semibold text-gray-900">Добро пожаловать - <span className='text-teal-400'>НА-ПАРЕ.РФ</span></h1>
                          <p className="mt-2 text-sm text-gray-700">
                              Здесь вы можете получить интересующую вас информацию о расписаниях в колледже.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
      <DashboardLayout>
          {page}
      </DashboardLayout>
  )
}