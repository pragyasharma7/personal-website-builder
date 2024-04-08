import { Flex, Avatar, DropdownMenu, HoverCard, Heading, Box, Link, Button, Section } from '@radix-ui/themes';
import { FaceIcon, ImageIcon, TriangleDownIcon } from '@radix-ui/react-icons'

export default function Header(){
    return (
        <div className='w-full bg-bgNavBar shadow text-white py-3 drop-shadow-lg pl-9 pr-9'>
            <Flex gap="3">
            <Avatar
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A" className='cursor-pointer'
                />
             <p className='text-sm text-white p-2.5 font-bold h-10'>Site Builder</p>

    <HoverCard.Root>
    <HoverCard.Trigger>
      <Heading size="3" as="h3" align="center">
              <Flex gap="1">

          Sections <TriangleDownIcon/>
          </Flex>
          </Heading>
    </HoverCard.Trigger>
    <HoverCard.Content maxWidth="300px" className='rounded-3xl'>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
                          <Flex gap="1">

            <Link href="#" underline="none" color="indigo">📌  <span className='text-black text-sm font-bold'>About you</span></Link>
            </Flex>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
            <Link href="#" underline="none" color="indigo">💡  <span className='text-black text-sm font-bold'>Skillsets</span></Link>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
            <Link href="#" underline="none" color="indigo">🛠️  <span className='text-black text-sm font-bold'>Projects</span></Link>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
            <Link href="#" underline="none" color="indigo">🌐  <span className='text-black text-sm font-bold'>Experience</span></Link>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
                          <Flex gap="1">

            <Link href="#" underline="none" color="indigo">🔗 <span className='text-black text-sm font-bold'>Lets connect</span></Link>
            </Flex>
        </Box>
    </HoverCard.Content>
    

     <HoverCard.Trigger>
      <Heading size="3" as="h3" align="center">
              <Flex gap="1">

          Sections <TriangleDownIcon/>
          </Flex>
          </Heading>
    </HoverCard.Trigger>
    <HoverCard.Content maxWidth="300px" className='rounded-3xl'>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
                          <Flex gap="1">

            <Link href="#" underline="none" color="indigo">📌  <span className='text-black text-sm font-bold'>About you</span></Link>
            </Flex>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
            <Link href="#" underline="none" color="indigo">💡  <span className='text-black text-sm font-bold'>Skillsets</span></Link>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
            <Link href="#" underline="none" color="indigo">🛠️  <span className='text-black text-sm font-bold'>Projects</span></Link>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
            <Link href="#" underline="none" color="indigo">🌐  <span className='text-black text-sm font-bold'>Experience</span></Link>
        </Box>

        <Box display="block" as='div' className='h-12 w-52 hover:bg-bgGray p-3 rounded-xl pl-6' >
                          <Flex gap="1">

            <Link href="#" underline="none" color="indigo">🔗 <span className='text-black text-sm font-bold'>Lets connect</span></Link>
            </Flex>
        </Box>
    </HoverCard.Content>


  </HoverCard.Root>
  <Flex gap="6">

        </Flex>
  
         <Flex gap="1">
             <p className='text-sm text-white p-2.5 font-bold h-10'>Preview</p>
                <Button color="blue">Publish</Button>
        </Flex>
        </Flex>
        </div>

    )
}