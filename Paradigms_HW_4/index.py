# Написать скрипт для расчета корреляции Пирсона между
# двумя случайными величинами (двумя массивами). 

from scipy.stats.stats import pearsonr

ar1 = [1,5,8,4,-5,-1,0]
ar2 = [1,5,2,1,1,1,1]
print(ar1)
print(ar2)

print(pearsonr(ar1, ar2))
