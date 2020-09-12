// modules
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// actions
import { getCityWeather } from '../../actions/weatherAction';
import { authenticateUser } from '../../actions/authenticateUserAction';
// containers
import { Weather, Auth } from '../../containers';

class MainPage extends PureComponent {
    render() {
        const { authentication: { isLogged, isLoading } } = this.props;
        return (
            <React.Fragment>
                {isLogged ?  <Weather {...this.props} /> : <Auth {...this.props}/>}
                {isLoading && <div>loading...</div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({
    weatherData: store.weatherData,
    authentication: store.authentication,
});

const mapDispatchToProps = dispatch => ({
    getCityWeather: () => dispatch(getCityWeather()),
    authenticateUserAction: () => dispatch(authenticateUser()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainPage);
