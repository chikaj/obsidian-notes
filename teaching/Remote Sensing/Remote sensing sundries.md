## Basic MathJax symbols
 - $a^2$
 - $\pi$
## Covariance
	$cov(X, Y) = \frac {\Sigma(X_i - \bar{X})(Y_j - \bar{Y})} {n-1}$

## Normal (Guassian) Curve
	$y = \frac{1} {\sigma \sqrt(2\pi)} e^\frac{(x - \mu)^2} {2\sigma^2}$
	where: $\mu$ = mean, $\sigma$ = standard deviation, and $x$ = sample value

## Change Detection
#### Global Environmental Change
**Definitions**
 - Environmental: the biophysical environment
 - Global:
	 - Systemic
	 - Cumulative
 - Change
	 - Conversion: from one land cover class to another (e.g., forest change to crops, or grasslands to built-up land cover)
	 - Modification: within class changes (e.g., forest thinning)

#### Remote Sensing Data considerations
 - different years, but same _phenological cycle_
 - similar _atmospheric conditions_
 - same _time of day_
 - same _resolutions_: spatial, spectral, radiometric and temporal, if possible
 - same _pre-processing_. It depends, actually, on what type of analysis you are performing. If it is 2 separate classifications, radiometric corrections may not be crucial.
	
#### Analysis Techniques
1. Write memory insertion (a form of visualization)
2. Image band differencing
	- $t_1$ - $t_0$ = $\Delta$, then examine histogram. Significant change in in the histogram tails
	- Possible min/max change values = $\pm(max(<data_type>))$ 
	- Likely mean $\approx$ 0
- Image band ratioing
	- - $t_1 \div t_0$ = $\Delta$, then examine histogram. Significant change in in the histogram tails
	- Possible min/max change values = approaching 0 to infinity.  
	- Likely mean $\approx$ 1
- Post-Classification Change Detection
	- Change matrix with "From" and "To" class information