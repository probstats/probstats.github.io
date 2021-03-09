// generate data for each distribution

function generate_data(dist_name, dist_type, params) {

    // first define the probability function for each distribution
    switch(dist_name) {

        // discrete distributions 

        case "benford": 
        var pdf = function(x, params) {
            const base = params[0];
            var pmf;
            if (x < base) { pmf = Math.log(1+1/x) / Math.log(base) } else { pmf = 0 }
            return pmf;
        };
        break;

        case "bernoulli": 
            var pdf = function(x, params) {
                const p = params[0];
                var pmf;
                if (x == 1) { pmf = p } else if(x == 0) { pmf = 1-p } else { pmf = 0 }
                return pmf;
            };
            break;

        case "binomial":
            var pdf = function(x, params) {
                const n = params[0];
                const p = params[1];
                return (x > n) ? 0 : jStat.binomial.pdf(x, n, p);
            }
            break;

        case "geometric":
            var pdf = function(x, params) {
                const p = params[0];
                return (x < 1) ? 0 : Math.pow(1-p,x-1)*p;
            }
            break;

        case "hypgeom":
            var pdf = function(x, params) {
                const N = params[0];
                const K = params[1];
                const n = params[2];
                return jStat.hypgeom.pdf(x, N, K, n);
            }
            break;

        case "negbin":
            var pdf = function(x, params) {
                const r = params[0];
                const p = params[1];
                return jStat.negbin.pdf(x, r, p);
            }
            break;

        case "poisson":
            var pdf = function(x, params) {
                const lambda = params[0];
                return jStat.poisson.pdf(x, lambda);
            }
            break;

        case "uniform_discrete":
            var pdf = function(x, params) {
                const a = params[0];
                const b = params[1];
                return (x < a || x > b) ? 0 : 1/(b-a+1);
            }
            break;

        // continuous distributions 

        case "beta":
            var pdf = function(x, params) {
                const alpha = params[0];
                const beta = params[1];
                return jStat.beta.pdf(x, alpha, beta);
            }
            break;

        case "chisquare":
            var pdf = function(x, params) {
                const dof = params[0];
                return jStat.chisquare.pdf(x, dof);
            }
            break;
            
        case "exponential": 
            var pdf = function(x, params) {
                const lambda = params[0];
                return jStat.exponential.pdf(x, lambda);
            }
            break;

        case "centralF":
            var pdf = function(x, params) {
                const d1 = params[0];
                const d2 = params[1];
                return jStat.centralF.pdf(x, d1, d2);
            }
            break;

        case "gamma":
            var pdf = function(x, params) {
                const shape = params[0];
                const scale = params[1];
                return jStat.gamma.pdf(x, shape, scale);
            }
            break;

        case "lognormal":
            var pdf = function(x, params) {
                const mu = params[0];
                const sigma = params[1];
                return jStat.lognormal.pdf(x, mu, sigma);
            }
            break;

        case "normal":
            var pdf = function(x, params) {
                const mu = params[0];
                const sigma = params[1];
                return jStat.normal.pdf(x, mu, sigma);
            }
            break;

        case "pareto":
            var pdf = function(x, params) {
                const xm = params[0];
                const shape = params[1];
                return jStat.pareto.pdf(x, xm, shape);
            }
            break;

        case "rayleigh": 
            var pdf = function(x, params) {
                const sigma = params[0];
                return (x >= 0) ? x/Math.pow(sigma,2)*Math.exp(-Math.pow(x,2)/2/Math.pow(sigma,2)) : 0;
            }
            break;

        case "studentt":
            var pdf = function(x, params) {
                const dof = params[0];
                return jStat.studentt.pdf(x, dof);
            }
            break;

        case "triangular":
            var pdf = function(x, params) {
                const a = params[0];
                const b = params[1];
                const c = params[2];
                return jStat.triangular.pdf(x, a, b, c);
            }
            break;

        case "uniform":
            var pdf = function(x, params) {
                const a = params[0];
                const b = params[1];
                return jStat.uniform.pdf(x, a, b);
            }
            break;

        case "weibull":
            var pdf = function(x, params) {
                const shape = params[0];
                const scale = params[1];
                return jStat.weibull.pdf(x, scale, shape);
            }
            break;
    }

    // generating data from the probability function (pdf)
    var data = [];
    var start, stop, step;

    if (dist_type == "continuous") {

        step = (xRange[1] - xRange[0]) / 500;
        start = xRange[0] + step;
        stop = xRange[1] + step * 2;
        
    }

    else if (dist_type == "discrete") {

        start = xRange[0];
        stop = xRange[1] + 1;
        step = 1;
    }

    if (dist_name == "benford") {
        // start = 1;
        for (let x = start; x < stop; x += step) {
            if (x < 10) {
                data.push([x, pdf(x, params)]);
            }
            else if (x == 10) {
                data.push(["A", pdf(x, params)]);
            }
            else if (x == 11) {
                data.push(["B", pdf(x, params)]);
            }
            else if (x == 12) {
                data.push(["C", pdf(x, params)]);
            }
            else if (x == 13) {
                data.push(["D", pdf(x, params)]);
            }
            else if (x == 14) {
                data.push(["E", pdf(x, params)]);
            }
            else if (x == 15) {
                data.push(["F", pdf(x, params)]);
            }
        }
    }
    else {
        for (let x = start; x < stop; x += step) { 
            data.push([x, pdf(x, params)]);
        }
    }

    return data;
}
