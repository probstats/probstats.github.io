// generate data for each distribution

function generate_data(dist_name, params) {

    // first define the probability function for each distribution
    switch(dist_name) {

        // discrete distributions 

        case "bernoulli": 
            var pdf = function(x, params) {
                var p = params[0];
                var pmf;
                if(x == 1) { pmf = p } else if(x == 0) { pmf = 1-p } else { pmf = 0 }
                return pmf;
            };
            break;

        case "binomial":
            var pdf = function(x, params) {
                var n = params[0];
                var p = params[1];
                return (x > n) ? 0 : jStat.binomial.pdf(x, n, p);
            }
            break;

        case "geometric":
            var pdf = function(x, params) {
                var p = params[0];
                return (x < 1) ? 0 : Math.pow(1-p,x-1)*p;
            }
            break;

        case "hypgeom":
            var pdf = function(x, params) {
                var N = params[0];
                var K = params[1];
                var n = params[2];
                return jStat.hypgeom.pdf(x, N, K, n);
            }
            break;

        case "negbin":
            var pdf = function(x, params) {
                var r = params[0];
                var p = params[1];
                return jStat.negbin.pdf(x, r, p);
            }
            break;

        case "poisson":
            var pdf = function(x, params) {
                var lambda = params[0];
                return jStat.poisson.pdf(x, lambda);
            }
            break;

        case "uniform_discrete":
            var pdf = function(x, params) {
                var a = params[0];
                var b = params[1];
                return (x < a || x > b) ? 0 : 1/(b-a+1);
            }
            break;

        // continuous distributions 

        case "beta":
            var pdf = function(x, params) {
                var alpha = params[0];
                var beta = params[1];
                return jStat.beta.pdf(x, alpha, beta);
            }
            break;

        case "chisquare":
            var pdf = function(x, params) {
                var dof = params[0];
                return jStat.chisquare.pdf(x, dof);
            }
            break;
            
        case "exponential": 
        var pdf = function(x, params) {
            var lambda = params[0];
                return jStat.exponential.pdf(x, lambda);
            }
            break;

        case "centralF":
            var pdf = function(x, params) {
                var d1 = params[0];
                var d2 = params[1];
                return jStat.centralF.pdf(x, d1, d2);
            }
            break;

        case "gamma":
            var pdf = function(x, params) {
                var shape = params[0];
                var scale = params[1];
                return jStat.gamma.pdf(x, shape, scale);
            }
            break;

        case "lognormal":
            var pdf = function(x, params) {
                var mu = params[0];
                var sigma = params[1];
                return jStat.lognormal.pdf(x, mu, sigma);
            }
            break;

        case "normal":
            var pdf = function(x, params) {
                var mu = params[0];
                var sigma = params[1];
                return jStat.normal.pdf(x, mu, sigma);
            }
            break;

        case "pareto":
            var pdf = function(x, params) {
                var xm = params[0];
                var shape = params[1];
                return jStat.pareto.pdf(x, xm, shape);
            }
            break;

        case "studentt":
            var pdf = function(x, params) {
                var dof = params[0];
                return jStat.studentt.pdf(x, dof);
            }
            break;

        case "triangular":
            var pdf = function(x, params) {
                var a = params[0];
                var b = params[1];
                var c = params[2];
                return jStat.triangular.pdf(x, a, b, c);
            }
            break;

        case "uniform":
            var pdf = function(x, params) {
                var a = params[0];
                var b = params[1];
                return jStat.uniform.pdf(x, a, b);
            }
            break;

        case "weibull":
            var pdf = function(x, params) {
                var shape = params[0];
                var scale = params[1];
                return jStat.weibull.pdf(x, scale, shape);
            }
            break;
    }

    var data = [];

    // generating data from the probability function (pdf)
    for (var x = start; x < stop; x += step) { 
        data.push([x, pdf(x, params)]);
    }

    return data;
}
