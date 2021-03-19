import {connect} from 'react-redux';
import Overlay from '../components/overlay';
import {setOpenForm,inputTex} from '../actions/index';

const mapStateToProps = state => (
    {
        isOpenForm : state.isOpenForm
    }
)


const mapDispatchToProps = dispatch => (
    {
        inputTex(texContent){
            dispatch(inputTex(texContent))
        },
        setOpenForm(isOpenForm){
            dispatch(setOpenForm(isOpenForm))
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Overlay)

