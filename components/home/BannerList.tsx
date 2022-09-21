import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { IBanner } from '../../interfaces/IBanner';
import Banner from './Banner';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface IBannerListProps {
    banners: IBanner[];
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      flexGrow: 1,
      background: theme.palette.background.paper
    },
  }));

const BannerList: React.FunctionComponent<IBannerListProps> = ({banners}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = banners?.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };
    return (banners?.length > 0 &&
        
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>
            {
                banners?.map((banner, index) => (
                    <Banner key={`banners-${banner.quadroNo}`} banner={banner}></Banner>
                ))
            }
            </AutoPlaySwipeableViews>
           
            
            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === (maxSteps-1)}>
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </Button>
                }
            />


        </div> || <div></div>
    );
};

export default BannerList;
