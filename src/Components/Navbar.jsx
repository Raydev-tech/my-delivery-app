import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BellIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon,  } from '@heroicons/react/20/solid'

const products = [
  { name: 'Domestics', href: '#',},
  { name: 'ECommerce', href: '#'},
  { name: 'Corperative', href: '#'},
  { name: 'Oversea', href: '#'},
]
// const callsToAction = [
  // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  // { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

const Nav =() =>{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img 
              alt=""
              src="data:image/png;base64,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"
              className="h-9 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Our Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
  
            </PopoverPanel>
          </Popover>

          <a href="ContactUs" className="text-sm/6 font-semibold text-white">
            Contact Us
          </a>
          <a href="CustomerDashboard" className="text-sm/6 font-semibold text-white">
            Dashboard
          </a>
          <a href="AboutUS" className="text-sm/6 font-semibold text-white">
            About Us
          </a>
        </PopoverGroup>
          
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            {/* <a href="Login" className="text-sm/6 font-semibold"> */}
              {/* Login */}
            {/* </a> */}
            <BellIcon aria-hidden="true" className="size-6" />
            </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAA5FBMVEX////l5eXm5ubk5OQEL2fj4+Py8vLv7+/09PTt7e329vb4+Pj9/f3q6uoAI2HySwAAIGAAFVt+i6XyTADyRQAALGbyUBKOmK7yVyLl7vAAAFYAE1sAJ2MuRHLEyta1vMj0/f7yUxkAHV/51s3vy8HzZTnr1M7t6OX75d8UNWoADlkACVj88/DyOwDumob4yr/xaEL2saHupZVib45xfpo9UXulrL3W2eHvlH3utqno3drwiG3xe1z56OTyXCzrvbNLXoQxSXextsVZaIqXna/M0drtlYHxbkr0hWnzj3fpzcfrnYy7xGBSAAAQoklEQVR4nO1d/WOaPhOHMEEESp1ISV+lXa1r1Wlf1jerW5/53db9///PcwlBA6IiArWl2Q90HJLPJbm75O5CBAGKgZCowVUWkajAVZcQQoSAGEEBggxXTZwSJD1EMAhBYgQVCGW4VniCwAgVjyCqPMEHUeZASCujo3WJ8dEJH/zHrEHh+V+hhrfAvySVaA0lSaI1wJVWjRhBkTyCBgRaNfy/pHuEkswItAa4liibcC1HEUhdlP8oAuUfbqgMRIkHwaOjuMUpCElOhK5SEgzDQJqu6wr8UYZrBa6qAH8gIMBFV+FGBa5lQtCnBIEnKHDVCAF+SV5pkFfKPoHcCBPkKIISJvggYqFTFqKLAqHoE0meDAkJiTEHrIgkf8CqgQHLCFEDVgoMWKgrWpx4EAvRGXHQKQvQzfCfSGCD/K+sTpOrE1IXj24GBM+/GIFOFEUqK6okSp7AikxWgODJpSjRGqRZgiewQPAENkSQgaAwguhJssjUicjUicgEloEgBDkKhI+uEoGu5KNTY6FDQXQaFEVV1QpcZbjKcK3AVZ1HUAhBXUTwf1mGazkRQQ4TkqMrL0YneCIhSqxJ2FjxO4wRFNEjaEDwBiwQvAHLOgwIfr+wAcs6zCfAVfLrYh3GxIkjsA5jIzlEWIhOTohOiC2w79n+T1s4JLB+C/sCy7VwUGC5Fg6qE57A5FKKFthp/4fUyQJ0E3US6P8ZdRIGMVEnkiBDKUPxr+XwjQwIeda1hDCr/2c6LCywq3fYjMCGO2wisHOHU1idrITOHzVhdSJ92P9J0/stHNCVkS0szbbwRGGH+3+Owp7b/7HNydz+j0Lng4jqfwVKBYoM1zJcy3CVyY2lBGUZQY4iVDhCOYpQXkZIFZ1Am2TuhE2cmbDN0bD8vCykTuZPJ8MTtrnqZDk6OTY6QQjo/2QC+878H7MLNr+Fpws2z/77CzZxjQUb6/+ECzaKDoXRyaui8/sfZsFsEa2xJbHmrZV1RtAYQWYElRAMRlAYoRJFKDMCvFKjryR1+YQyT9A5EOUoEJUQCIOva0V0Go9u4itJ0WEzcSdJIYdNHHeStMRhswCdGolOmudO8kAU3f5H8B/f/7M6/2GBXZ3/+P6fueo05P8RadUo1MIiI6jTFkaUTZFryIpXA1LCBFoD8gi81fD6H/4IsMmBQGFNPgExg07g0JWj0FH+0RJ0QsDDWor2/zLCrMCWcvX/BtGJESBW9v8uG7CFsP8F57/I47/o+u/D/hV7/lP0+W/R1z9MVgq7/o0tsO85/lFg/1fR/Z9F938X3f4XPf5V9PhnZIcVKP4dW2Dfs/0vcP5L0fOfip7/VnT7X/T816LnP3uykl3+O/L8kqBnNjP/PbbAJrH/4/H4EApcxkebbP+zin9c7e6RUq1W9y6OjI3lP4v4R4mMsMPqJ79sXauxx39pzfhHKR46Ov6l0K1E/t85gKXS+YT/+kEQcJLmTBedByJT+y/fVLe3t7doA1yU3ob9T3f+AxZTuKYNcPx9I/nPIP4RNliHe1QAblIwpwniH0vQ6elPWMLTKcPTgnsUOPFHElZ14oakrCkKBS4zgkb8lDxhfXQVRtBnp1MCrSFiwrok/rHKhLXyY59agKvPScqOirKbTueS/6B8P6YDYH8rQTk+kF8l/sHsf5IFa3g5rRq7nxKX+oESZzktx0YncOjA/qfjsJghBPwS5YN6cv6/6muBWOJOmR//SNFhZXgWMCH/AocumTstOv7h+fTy8H+go721+X+9+Mdc/1f8+IdaXc7oYv6lefGPVdzpUfGPXAIWwtV+Yv4PtCzRCdEdFiP+sSRgFeywo8QDAPT/yuE0KX44TYgU2NTzH5V1+N+A+Mfc/o8b/7hJagED/R8znC7FRycsTVjgCYkTFvRf24n5r2SZThGl/+PHP2InrKDD8+WsRvMf1v/rptMg8TXiH/LXhAKQtf0P869FxD+WJ6wti3+I6ueEU8AJ/1I26XTJEhZ9wtKERZ+gHCa0ADD/zzKdUvBkZTZhNXb8Y3HC6oQgJeX/QFmUTrss/rEsnVaYJ7Bp739Qfqw+BazvH5/v/sxh/R8nYZ35f5ImrBvMCRKX9a3jvb2Dq+/jSjhhPd10+iD/3F4BxBNS2LCAbi/is36+9fPz98OSrEShS3U7xTT+kfmGlZ9LLWCdsH5+8/n5tiSrAW9udujyy3/YWTgFrG9VL+o3189jUpeO3kv8g+N/PGcKWN/fPt7bvtk5uhU01UBlIY46TTX+kc/4F2YVILC+d/H1fzvPY2+4v8Z2MiEf/SciJeAEAdar1a9Xv8a3KgtzxNywlbL+WzBgU7V/EppYQGrWodePSn4dFIQYb8NWlvYvw/kPEG69KWD94JqYdYVk8ggbkf+Qx/yXRBs9J8jxIfl/AoHNZP6b0/qHEATPCbJ1ra+xYSvt9U9O61/aYWNvClgdG2IoYBl/w1ba69888z9VzwlS/zSWDVIXiUd7iwOSOUh+QfqGEWhdNGC9CF0W8Y8M/F9e/6s7ngWoX1w9H5HEuCMo4evMDYFDl77/Kx//p0/4xNYA+8fVmGXvU7b+T9ZhWfu/Wb+MV46EZ+3/Xiiw6dp/UtmvuKtgjv884x8Zxb+mcvlrdzVHcNbxr7w3bOmHX6urtEDW8c884t+hDVvPB3vH23HLcV1YNJzWjn+/xv4P7fZ5J34RFqHL7vuXWW7YQqrneTfYNMdg8yAyWdW8G2rFJ6y/nWxR/kse+U8zOUmV71cHP6+OdGXudjJtfH1z8OMXKq8LYln+ExOiLPPfwgKL0MHefr2+v3dQDhImG7YU4fPFFjxxXD2a2bCVcv5bLIFN9/tPpS3mCNr/Wo5UJ6hyzRKm6rtHr/P9yzTzX0MLNi4StH0VuWAznqezpPNyptvJ8sh/Dm3YGnNTwF0UtWFL5vIlj3/JmeY/55D/HnIn8YGw4+9evwTz32XOU16/ETh06ee/52//+TjI9o4aMWD5UFne+Q/Z88+nAm3/iuLf4Pk/yJb/LPc/RW/Y4lOB9o6C45/FP+pT+d+/yhjdIsDr7n+LBKzuT7gjgzsCsPp5OkR2b43Fzbnm/rcYAzZl+288T5wgu+No+69+8k1k9XpT9n8GQk/JN2wBQfm+S9nb3z0SotWJrNaPySCpX1zlGv+INlhr7X+Okku99L/q+fnej3GYwBmsnf3d892vR0K0OX3r53/JpfFtRVg0nVJUdKuSOt7n+V9oU75/8Br+j03a/1n075+s/4WZt/39G08kivv9o9gCm57937jvPxT5+2ev8em5POv6OP/r4/yvRPGPgnz/tOjfv6VNsvL3jxEbTAoKT9j8VB9fnSCMMd9hqq//RfZhrMmAlYIdRoXCH7B6EB3CPjqdjWSZRxd/Opkw/6H9BcoJlC8vIYHFD6Nu9/IbSValAvt03/3v34nHpqjBL5q+wMIbXsgv4dpkIIwmPAANU/LeTeoAgldXqy1jhs5AUEd31MbslV+8J3I8/+tbx4RSq5nWAAcXbI+macN95x6TGvRHqwbPmc43UjVqdUzLMbyENfjbrJEG6tQsl4Fowj2rIaKHTs2kxToFwqkFf8C/YdcD0bh0aqQO685AYtsy2bN2fud/6d9Mx6KlM8BcwqJeHtq22Rv0LNt6xEa5PbTN4d+7geVa/zA80DIdp3avkIRF4c51nFNB01uW45jfBFIXfoR7dsNQHyzH9N5/2tCEnusMh6euZZsDTJwDf0zXGg56pm2fnqlt23/Uyu/8LzSqWZqgIgMFIwyo55pdTcD4YdAZAcFxrXvyi4eBTf9omo7r9IhcImDRdk4x9Lnp/QEgniwg2w0YE5bVxF4mtyjhntkXZHjnnW21tBL+zzQHT1CH0e38FYQzuzZqEHSIWecZd1IG538ZwH971v6jvmn1PUnGX+Dar1n3DUrAv92aTvh3gYkTGJf4r23f2acgwU3T7trmyAAQXdt9dH3+JyAo/yrArJi1voaalvuHEYhyIPxrwhr2P4L/pf4fj3+CKcC/MXR/8zUM3QFmVTdN857wbz448IyCHoDr+5rHv9U6dU+xpLdN97Fv+/wbQf6hjoZrXzag4Wo8upn+5x1D85ZT657/BfybrVYTSkvgNiw8WPY9xz+oppHBVo24Zz96/N/XrJMy/uta7Sn/9zV4Uri0rYdLxr85gndDQdP+NxTLvNfgRX98dB7/9j15sNWUcjz/a6L/TAzS1YbSbJYMgH0iTjys6MU0Tybq5I8NlqJlWW0FBkBDt+2/+NIm2h1+9KLa7kAwTPdPg/R/CU30X6cNT/yu9TFplIFrNRUBBoExjX9IE/3XaeV4/hfwPwSlDAUj/K9D6x/hFvDPidML/HcynAbAPwL+nzBohVbfts44/uk96P4m5R/sH9iJ4akDhoHw33NdYkNN2+qCOA3tLp6iQ8D/0CHFfsrx+5ffYCAbTGrwP4tMBayRoVv2JeZqMO3+hH8Km/CvIscdDO27hjHlHwnkHmiLCf9WS9DPWFJ4z7WhfR2nN8KAbuCeBvk3T4iLey3/R4Lxbz5IfoSNvKiBMWjNgWtKyBthYF0wQPWH3r1pfUF0/KuoX3Mdq11BU/4leKHrmE3RH/+m9TQ1WL/tLugCx+0hEUD0QVdgDx0WyfgH/teJfyTUf7z+9zUMGlnub40kreHRHdw4sewBTfPHLxYIONV/TXglGPk7LAMnvv4TkGo7xKzJlyH97+s/BY8s+y9R82e2Y7fIxgCYZGgB/Z/f+V9E/580X6A0m/z6H99BN/afzr78Na1LGBR3pt370tZb/2oulWTglfB/b1kPKMC/iPtm54nj3xyRdzebL6Jv/zDMHL4BCDzqOGa39fByadd6VP9fNumTL6Wk9i/J/Mchc3LQvGbA/4G7HbcGN23zN/Arg2ogomvZtSFd4jD+9T+XZNXA84/Q4FLg+HfYpL5Tmth/NHRrbWJKRzDzhcpt2z0h/Ds2XSmYnWZu37+EgW7bpNqa6QYybER88oe0ymm/QXUAfnkE3W0OLz1N1ux0CP8wJslKtm+5ZP5LLJcEv6Ra459lEf7J2ggYtO1OScSnMJYAHTxp9ioAF7e7LtTh/kdedQa9QB60Gf+5nP+l67CoxzRgiUMrDBUm6q12Q/BXGA3loXkm6P4rdW7DlooV71Uqty+LBixVGrCkdQABLt5OLviDgqB1PDVoiBPoOiwOcDnf879m8h+4FSbypSbaYbf6hi00L5z6cf5Xdt+//Dj/qxj+z6L7vz/iH8WOfxU9/hnZYQWKf8cW2Pds/wuc/1L0/Kei578V3f6/Uv7rx/lfBTn/K5vtZG/k/K+3Yv/z3f+6cfznu/+pOOd/LQK8Kc35Yf+LzX/++5/XMadv8vyvVCcsb/D8r3QnrKlOpz/svycruX7/ZMXldLbfP3mN79/k5U7ZlPO/0nRYvcXzvzbZ/r/C989WdFjz6N7o+V+bG04RIjssKmAV7f9evcNWCadFdVjK3z9MJrDvzP7HCVivGf9YKWC9ojmZ2/8x4h9LExZS/f7txqVT5Pr94/XTad7s+V8ba//D/Gf5/fM0Etbe6Plfi9IpX/X7956s5HL+wbrupDd9/tdG2/8FNaR3/snycGqshPWF/p/NPf/L334QsZ1ixQ1bb/X8rzjhpHzDqR/xjw/+iz7+A01SQP23bMAWyv4Vdf5T4Plv0dc/RV//Ftz+/x/Z9Ot+vOtr4gAAAABJRU5ErkJggg=="
                className="h-11 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Our Services
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products,].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="ContactUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
                <a
                  href="CustomerDashboard"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </a>
                <a
                  href="AboutUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
              </div>
          
              <div className="py-6">
                <button>
                  <a
                    href="Login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </a>
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Nav;