import develop from './develop';
import staging from './staging';
import production from './production';
import _get from 'lodash/get';

const config = { develop, staging, production };

function getConfig(env: typeof process) {
    const parm: string = _get(env, 'environment', '');
    return _get(config, parm, config.develop);
};

export default getConfig(process);
