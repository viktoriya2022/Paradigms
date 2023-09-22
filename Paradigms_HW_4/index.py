# Написать скрипт для расчета корреляции Пирсона между
# двумя случайными величинами (двумя массивами). 

from scipy.stats.stats import pearsonr

ar1 = [1,5,8,4,-5,-1,0]
ar2 = [1,5,2,1,1,1,1]
print(ar1)
print(ar2)

def pearson_cor(array1, array2):
    return pearsonr(array1, array2)

print(pearson_cor(ar1, ar2))
