import { TextFeild, PasswordFeild, SelectFeild } from './assets/Components/TextFeild'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import Grid from '@mui/material/Unstable_Grid2';
import Checkbox from '@mui/material/Checkbox';
import './App.css'


function App() {

  let OrgSize = ["5,000+", "1,000-5,000", "500-999", "100-499", "20-99", "1-19"]
  let INDUSTRY = ["Banking/Insurance/Financial Services", "Consulting, Professional & Business Services", "Education", "Energy/Utilitie", "Government", "Healthcare & Biotech", "Legal", "Not For Profit", "Real Estate", "Software & Technology", "Other",]

  return (
    <>
      <div className='md:w-[50%] w-[80%] text-center my-20'>
        <h1 className='text-2xl '>Try <strong>Sign</strong> free for 14 days</h1>
        <p className='my-10'>Already have a Formstack account? <a href="#" className='text-blue-600 hover:text-blue-400'>Start your trial in app <FontAwesomeIcon icon={faCircleChevronRight} /></a></p>
        <div className='bg-white rounded-lg p-10 text-left shadow-lg'>

          <Grid container spacing={2} >
            <Grid xs={12} md={6}>
              <TextFeild label="FIRST NAME" PlaceHolder="John" />
            </Grid>
            <Grid xs={12} md={6}>
              <TextFeild label="LAST NAME" PlaceHolder="Doe" />
            </Grid>
            <Grid xs={12}>
              <TextFeild label="WORK EMAIL" PlaceHolder="John@doe.com" />
            </Grid>
            <Grid xs={12}>
              <PasswordFeild label="PASSWORD" PlaceHolder="Password" />
            </Grid>
            <Grid xs={12}>
              <TextFeild label="ORGANIZATION NAME" PlaceHolder="ABC Orginization" />
            </Grid>
            <Grid xs={12}>
              <SelectFeild label="ORGANIZATION SIZE" val={OrgSize} />
            </Grid>
            <Grid xs={12}>
              <SelectFeild label="INDUSTRY" val={INDUSTRY} />
            </Grid>
          </Grid >
          
          <p className='text-[13px] mt-5'>
            Formstack has updated our Terms of Service effective January 4, 2023.<br />
            We encourage you to read the document in its entirety.
          </p>

          <div className='text-sm flex items-start mt-2'>
            <Checkbox size="small" />
            <span className='mt-[10px]'>I understand and agree to the <span className='text-blue-600 hover:text-blue-400 underline cursor-pointer'>Formstack Privacy Policy</span>, <span className='text-blue-600 hover:text-blue-400 underline cursor-pointer'>Software Services Agreement</span>, and <span className='text-blue-600 hover:text-blue-400 underline cursor-pointer'>Acceptable Use Policy</span>.
            </span>
          </div >

          <button className='bg-[#0197EC] w-full p-2 rounded-md text-white mt-6'>Start free trial</button>
        </div >

      </div >

    </>
  )
}

export default App
