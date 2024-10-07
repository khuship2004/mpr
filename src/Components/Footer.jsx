
export default function Footer() {
  return (
    <footer className="bg-[#D1D8C5] text-[#615EFC] py-4 border-t border-[#7E8EF1]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative w-40 h-12">
              <img
                src="/Images/logo2.png"
                alt="TechWizard Electronic Store Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm mb-1">
              &copy; {new Date().getFullYear()} TechWizard. All rights reserved.
            </div>
            <div className="text-xs text-[#7E8EF1]">
              Empowering Your Tech Journey
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}