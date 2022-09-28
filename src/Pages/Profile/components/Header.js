import React,{ useState } from 'react'
import styled from 'styled-components'
import Text from '../../../components/Text/Text'
import Line from '../../../components/Line/Line'

const Header = () => {

  const StyledHeader = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
  `
  const name = {
    kyc: false,
    membership: false,
    default: true,
  }

  const [ active, isActive ] = useState(name);

  let kycColor = active.kyc || active.default ? '#FFF' : 'rgba(139, 140, 145, 0.88)';
  let memberColor = active.membership  ? '#FFF' : 'rgba(139, 140, 145, 0.88)';

  console.log(active)

  return (
    <StyledHeader>

      <div>
        <div style={{display:'flex',alignItems:'center',cursor:'pointer'}}
          onClick={()=> isActive({...name,kyc: true})}
        >
          <div>
            <Text Text="KYC" size="1.5rem" ls="0" color={kycColor} />
            <Line width="2rem" height="2px" margin="0.25rem 0 0 0.5rem" bg={kycColor}/>
          </div>
          <svg style={{margin:'0 0 0 0.5rem'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" style={{fill :`${active.kyc || active.default ? '#fff' : 'rgba(139, 140, 145, 0.88)' }`}} d="M14.213 0C17.6747 0 20 2.16273 20 5.38122V14.6188C20 17.8654 17.7462 19.9769 14.2582 19.997L5.78805 20C2.32645 20 0 17.8373 0 14.6188V5.38122C0 2.1336 2.25379 0.023104 5.74181 0.00401808L14.2119 0H14.213ZM14.213 1.50678L5.74732 1.5108C3.18415 1.52486 1.65153 2.97137 1.65153 5.38122V14.6188C1.65153 17.0447 3.19846 18.4932 5.78695 18.4932L14.2527 18.4902C16.8159 18.4761 18.3485 17.0276 18.3485 14.6188V5.38122C18.3485 2.9553 16.8026 1.50678 14.213 1.50678ZM14.0007 13.5346C14.4565 13.5346 14.8264 13.8721 14.8264 14.288C14.8264 14.7039 14.4565 15.0414 14.0007 15.0414H6.05131C5.59549 15.0414 5.22554 14.7039 5.22554 14.288C5.22554 13.8721 5.59549 13.5346 6.05131 13.5346H14.0007ZM14.0007 9.32918C14.4565 9.32918 14.8264 9.6667 14.8264 10.0826C14.8264 10.4984 14.4565 10.836 14.0007 10.836H6.05131C5.59549 10.836 5.22554 10.4984 5.22554 10.0826C5.22554 9.6667 5.59549 9.32918 6.05131 9.32918H14.0007ZM9.08428 5.1335C9.54011 5.1335 9.91005 5.47102 9.91005 5.88689C9.91005 6.30276 9.54011 6.64028 9.08428 6.64028H6.05098C5.59516 6.64028 5.22521 6.30276 5.22521 5.88689C5.22521 5.47102 5.59516 5.1335 6.05098 5.1335H9.08428Z"/>
            <defs>
            <linearGradient id="paint0_linear_115_767" x1="0" y1="10" x2="20" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="#ECE9E6"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <div style={{width:'20rem'}}>
          <Text Text="Your information is collected for legal and security purposes only" 
          fw="300" fs="light" size="1rem"
          color={kycColor}
          />
        </div>
      </div>

      <div>
        <div style={{display:'flex',alignItems:'center',cursor:'pointer'}}
          onClick={()=> isActive({...name,membership: true,default:false})}
        >
          <div>
            <Text Text="Membership" size="1.5rem" ls="0" color={memberColor} />
            <Line width="2rem" height="2px" margin="0.25rem 0 0 0.5rem" bg={memberColor}/>
          </div>
          <svg style={{margin:'0 0 0 0.5rem'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" style={{fill :`${active.membership ? '#fff' : 'rgba(139, 140, 145, 0.88)' }`}} d="M16.2335 0C18.3098 0 19.9991 2.05486 19.9991 4.57943L20 7.544C20 7.77029 19.9265 7.98971 19.7953 8.14971C19.6651 8.31086 19.4874 8.40114 19.3023 8.40114C18.5702 8.40114 17.9749 9.11886 17.9749 10.0011C17.9749 10.8834 18.5702 11.6011 19.3023 11.6011C19.6874 11.6011 20 11.9851 20 12.4583V15.4206C20 17.9451 18.3107 20 16.2344 20H3.76558C1.6893 20 0 17.9451 0 15.4206V12.4583C0 11.9851 0.312558 11.6011 0.697674 11.6011C1.42977 11.6011 2.02512 10.8834 2.02512 10.0011C2.02512 9.144 1.45395 8.49714 0.697674 8.49714C0.512558 8.49714 0.334884 8.40686 0.204651 8.24571C0.0734884 8.08571 0 7.86629 0 7.64L0.000930233 4.57943C0.000930233 2.05486 1.69023 0 3.76651 0H16.2335ZM16.2335 1.71429H12.4177L12.4182 3.90994C12.4182 4.38309 12.1057 4.76709 11.7206 4.76709C11.3354 4.76709 11.0229 4.38309 11.0229 3.90994L11.0223 1.71429H3.76651C2.45953 1.71429 1.39628 3 1.39628 4.57943L1.39535 6.88571C2.57395 7.24114 3.42047 8.48229 3.42047 10.0011C3.42047 11.5349 2.55907 12.8286 1.39535 13.2046V15.4206C1.39535 17 2.4586 18.2857 3.76558 18.2857H11.0223L11.0229 16.5846C11.0229 16.1103 11.3354 15.7274 11.7206 15.7274C12.1057 15.7274 12.4182 16.1103 12.4182 16.5846L12.4177 18.2857H16.2344C17.5414 18.2857 18.6047 17 18.6047 15.4206V13.2046C17.4409 12.8286 16.5795 11.5349 16.5795 10.0011C16.5795 8.46629 17.44 7.17371 18.6047 6.79771L18.6037 4.57943C18.6037 3 17.5405 1.71429 16.2335 1.71429ZM11.7206 6.29086C12.1057 6.29086 12.4182 6.67486 12.4182 7.148V12.6577C12.4182 13.1309 12.1057 13.5149 11.7206 13.5149C11.3354 13.5149 11.0229 13.1309 11.0229 12.6577V7.148C11.0229 6.67486 11.3354 6.29086 11.7206 6.29086Z"/>
            <defs>
            <linearGradient id="paint0_linear_127_72" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
            <stop stop-color="#ECE9E6"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
          </svg>
          </div>
          <Text Text="Please chose your membership" 
          fw="300" fs="light" size="1rem" color={memberColor}
          />
      </div>
    </StyledHeader>
  )
}

export default Header