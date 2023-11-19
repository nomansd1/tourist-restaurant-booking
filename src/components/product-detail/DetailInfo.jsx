import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReviewsTab from './ReviewsTab';
import Details from './Details';

export default function DetailInfo() {
    return (
        <div className='bg-white'>
            <div className='max-w-screen-xl mx-auto p-4 md:p-7'>
                <Tabs>
                    <TabList className={`flex items-center`}>
                        <Tab className='p-2 border-b-[3px] border-white transition-all duration-500 ease-linear cursor-pointer'>
                            <span className='text-base font-medium'>Details</span>
                        </Tab>
                        <Tab className='p-2 border-b-[3px] border-white transition-all duration-500 ease-linear cursor-pointer'>
                            <span className='text-base font-medium'>Reviews</span>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <Details/>
                    </TabPanel>
                    <TabPanel>
                        <ReviewsTab/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
