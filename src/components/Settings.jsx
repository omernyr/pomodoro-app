import { useContext } from 'react'
import ReactSlider from 'react-slider'
import SettingContext from '../SettingContext'
import BackButton from './BackButton';

const Settings = ({ setShowSettings }) => {

    const { workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes } = useContext(SettingContext);

    return (
        <div style={{ textAlign: "center" }}>
            <label>work: {workMinutes}:00 </label>
            <ReactSlider
                onChange={(newValue) => setWorkMinutes(newValue)}
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={workMinutes}
                min={1}
                max={120}
            />
            <label>break: {breakMinutes}:00 </label>
            <ReactSlider
                onChange={(newValue) => setBreakMinutes(newValue)}
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={breakMinutes}
                min={1}
                max={120}
            />
            <BackButton />
        </div>
    )
}

export default Settings