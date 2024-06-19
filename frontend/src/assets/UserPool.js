import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-north-1_ZLNs7k1JB',
    ClientId: '237l7jtnipujc27rs5benbpaun',
};

export default new CognitoUserPool(poolData);
