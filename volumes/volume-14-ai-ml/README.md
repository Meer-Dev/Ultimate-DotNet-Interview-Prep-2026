# Volume 14: AI & Machine Learning — The Complete 2026 Interview Guide

<p align="center">
  <img src="https://img.shields.io/badge/Status-Complete-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/Year-2026-blue" alt="Year">
  <img src="https://img.shields.io/badge/Level-Junior%20%7C%20Mid%20%7C%20Senior-orange" alt="Level">
  <img src="https://img.shields.io/badge/Focus-FAANG%20%7C%20Top%20Tech-red" alt="Focus">
  <img src="https://img.shields.io/badge/Format-Interview%20Guide-lightgrey" alt="Format">
  <img src="https://img.shields.io/badge/Volume-14%20of%2016-ff69b4" alt="Volume">
</p>

---

> **Author:** Senior AI Engineer (20+ yrs), ex-FAANG ML Interviewer
> **Scope:** ML Fundamentals ? Deep Learning ? NLP ? Computer Vision ? MLOps ? 100+ Interview Questions
> **Target:** SDE / ML Engineer / Research Scientist / Applied Scientist roles

---

## Table of Contents

- [SECTION 1: MACHINE LEARNING FUNDAMENTALS](#section-1-machine-learning-fundamentals)
- [SECTION 2: DEEP LEARNING](#section-2-deep-learning)
- [SECTION 3: NATURAL LANGUAGE PROCESSING](#section-3-natural-language-processing)
- [SECTION 4: COMPUTER VISION](#section-4-computer-vision)
- [SECTION 5: MLOPS](#section-5-mlops)
- [SECTION 6: INTERVIEW QUESTIONS (100+)](#section-6-interview-questions-100)

---

## SECTION 1: MACHINE LEARNING FUNDAMENTALS

---

### 1.1 Supervised vs Unsupervised vs Reinforcement Learning

| Aspect | Supervised | Unsupervised | Reinforcement |
|--------|-----------|-------------|---------------|
| **Data** | Labeled (X, y) | Unlabeled (X only) | Agent + Environment |
| **Goal** | Map input ? output | Find hidden structure | Maximize cumulative reward |
| **Examples** | Classification, Regression | Clustering, Density est. | Game playing, Robotics |
| **Feedback** | Direct (error signal) | None (intrinsic) | Delayed (reward) |
| **When to use** | Labels available, clear output | Explore data patterns | Sequential decisions |
| **When NOT** | No labels, small data | Need specific predictions | Simulator unavailable |

**Code — Supervised (scikit-learn):**
`python
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier()
model.fit(X_train, y_train)
preds = model.predict(X_test)
`

**Code — Unsupervised:**
`python
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3)
kmeans.fit(X)
clusters = kmeans.predict(X)
`

**Code — RL (OpenAI Gym):**
`python
import gym
env = gym.make("CartPole-v1")
obs, _ = env.reset()
for _ in range(1000):
    action = env.action_space.sample()  # random policy
    obs, reward, done, truncated, _ = env.step(action)
    if done or truncated:
        break
`

**Common Mistakes:**
- Using supervised learning when labels are unreliable
- Assuming RL works without a well-defined reward function
- Ignoring data leakage in supervised pipelines

**Interview Questions:**
- *Q:* Can you use supervised learning for time-series? *A:* Yes, with lag features, but ARIMA/Prophet or RNNs often work better.
- *Q:* When would you pick unsupervised over supervised? *A:* When labeling is prohibitively expensive or you're exploring unknown data.

---

### 1.2 Linear Regression

**What it is:** Models the relationship between input features and a continuous target as a linear combination.

**Why it exists:** Simplest interpretable model; baseline for regression.

**How it works internally:**
- **OLS (Ordinary Least Squares):** Minimizes sum of squared residuals. Closed-form: ß = (X^T X)^{-1} X^T y
- **Gradient Descent:** Iteratively update weights: ß := ß - a * ?MSE
- **Regularization:**
  - **L1 (Lasso):** Adds ?|ß| penalty ? feature selection (sparsity)
  - **L2 (Ridge):** Adds ?ß² penalty ? shrinks weights uniformly
  - **ElasticNet:** Combines L1 + L2: ?1|ß| + ?2ß²

**When to use:** Baseline model, highly linear relationships, interpretability needed.

**When NOT:** Strong non-linearity, multicollinearity without regularization, high-dimensional sparse data.

**Code:**
`python
from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet
import numpy as np

X, y = np.random.randn(100, 5), np.random.randn(100)

# OLS
lr = LinearRegression().fit(X, y)
print(f"OLS Coef: {lr.coef_}")

# Ridge
ridge = Ridge(alpha=1.0).fit(X, y)

# Lasso
lasso = Lasso(alpha=0.1).fit(X, y)
print(f"Lasso zero coefs: {sum(abs(lasso.coef_) < 1e-10)}")

# ElasticNet
en = ElasticNet(alpha=0.1, l1_ratio=0.5).fit(X, y)
`

**Common Mistakes:**
- Not scaling features (L1/L2 penalize magnitude)
- Assuming linearity without checking residuals
- Including correlated features without regularization

**Interview Question:**
- *Q:* Why does Lasso produce sparse solutions but Ridge doesn't? *A:* L1 penalty has a diamond constraint region — intersections occur at axes (sparsity). L2 is circular — intersections are non-axial.

---

### 1.3 Logistic Regression

**What it is:** Classification model that outputs probabilities via the sigmoid function.

**Why it exists:** Extends linear regression to binary classification; outputs well-calibrated probabilities.

**How it works internally:**
- **Sigmoid:** s(z) = 1 / (1 + e^{-z}) where z = ß^T x
- **Decision boundary:** s(z) = 0.5 ? z = 0
- **Cross-Entropy Loss:** L = -[y log(y) + (1-y) log(1-y)]
- Optimized via gradient descent (no closed form due to non-linearity)

**When to use:** Binary classification, need calibrated probabilities, baseline classifier.

**When NOT:** Multi-class with many classes (use Softmax Regression), highly non-linear boundaries.

**Code:**
`python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import log_loss

model = LogisticRegression(C=1.0, penalty='l2')
model.fit(X_train, y_train)
probs = model.predict_proba(X_test)[:, 1]
print(f"Log-loss: {log_loss(y_test, probs):.4f}")
`

**Math intuition:** The log-odds (logit) is linear: log(p/(1-p)) = ß^T x. Each unit increase in x_j multiplies the odds by e^{ß_j}.

**Common Mistakes:**
- Using accuracy on imbalanced data (use PR-AUC instead)
- Not checking feature scaling (gradient descent converges slowly)
- Ignoring the linear decision boundary assumption

**Interview Question:**
- *Q:* Why can't we use MSE for logistic regression? *A:* MSE is non-convex for sigmoid (multiple local minima). Cross-entropy is convex, guaranteeing global optimum.

---

### 1.4 Decision Trees & Random Forest

**Decision Tree**
- **Splitting criteria:**
  - **Gini Impurity:** G = 1 - S p_i² (0 = pure, 0.5 = max impurity)
  - **Entropy:** H = -S p_i log p_i
  - **Information Gain:** IG = H(parent) - S (n_j/n) H(child_j)
- **Pruning:** Remove branches with little statistical power (cost-complexity pruning)

**Random Forest**
- **Bagging (Bootstrap Aggregating):** Train each tree on a bootstrap sample of data
- **Feature Randomness:** Only vn_features (classification) or 
_features/3 (regression) considered per split
- **Feature Importance:** Mean decrease in impurity (MDI) or permutation importance

**When to use:** Non-linear relationships, mixed data types, interpretability needed (trees).

**When NOT:** Very high-dimensional sparse data (linear models better), real-time prediction with deep trees.

**Code:**
`python
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt

dt = DecisionTreeClassifier(max_depth=5, min_samples_leaf=10)
dt.fit(X_train, y_train)

rf = RandomForestClassifier(n_estimators=200, max_depth=10, n_jobs=-1)
rf.fit(X_train, y_train)
print(f"RF Feature Importances: {rf.feature_importances_}")

# plot_tree(dt)  # for visualization
`

**Common Mistakes:**
- Not setting max_depth / min_samples_leaf ? overfitting
- Trees are unstable (high variance) — always use ensemble
- Interpreting feature importance blindly (correlated features split importance)

**Interview Question:**
- *Q:* Why are deeper trees bad? *A:* They overfit (learn noise), increase inference time, and lose generalization. Prune or set max depth.

---

### 1.5 Support Vector Machines (SVM)

**What it is:** Finds the hyperplane that maximizes the margin between classes.

**Why it exists:** Excels in high-dimensional spaces; kernel trick enables non-linear classification without explicit feature mapping.

**How it works:**
- **Margin maximization:** Maximize 2/||w|| subject to y_i (w·x_i + b) = 1
- **Soft margin:** Introduce slack ?_i for non-separable data: min ½||w||² + C S ?_i
- **Kernel trick:** Replace dot product with kernel function: K(x_i, x_j) = f(x_i)·f(x_j)
  - Linear, Polynomial, RBF (Gaussian): K(x_i, x_j) = exp(-?||x_i - x_j||²)
- **Support vectors:** Training points that lie on the margin — only they define the decision boundary

**When to use:** Clean, high-dimensional data; text classification; small-to-medium datasets.

**When NOT:** Very large datasets (scales O(n²) or O(n³)), noisy data with poor class separation.

**Code:**
`python
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

svm = SVC(kernel='rbf', C=1.0, gamma='scale', probability=True)
svm.fit(X_scaled, y_train)
print(f"Support vectors: {len(svm.support_)}")
print(f"Accuracy: {svm.score(X_scaled_test, y_test):.3f}")
`

**Common Mistakes:**
- Not scaling features (SVM is distance-based)
- Wrong kernel choice (RBF usually safe, but tune ? and C)
- Using probability=True on large datasets (slows training via Platt scaling)

**Interview Question:**
- *Q:* What happens if C is very large vs very small? *A:* Large C ? hard margin (less slack, overfits outliers). Small C ? soft margin (more tolerance, may underfit).

---

### 1.6 Naive Bayes

**What it is:** Probabilistic classifier based on Bayes' theorem with the strong (naive) assumption of conditional independence.

**Why it exists:** Extremely fast, works well with high-dimensional data, especially text.

**How it works:**
- **Bayes Theorem:** P(y|x) = P(x|y) P(y) / P(x)
- **Naive assumption:** P(x|y) = ? P(x_i|y) — features independent given class
- **Laplace smoothing:** Add-1 smoothing to avoid zero probabilities: P(x_i|y) = (count + 1) / (N + V)

**Variants:** GaussianNB (continuous), MultinomialNB (counts), BernoulliNB (binary).

**When to use:** Text classification (spam detection, sentiment), real-time inference, small datasets.

**When NOT:** Features are strongly correlated (violates assumption), need calibrated probabilities.

**Code:**
`python
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer

vectorizer = CountVectorizer()
X_vec = vectorizer.fit_transform(texts)

nb = MultinomialNB(alpha=1.0)  # alpha = Laplace smoothing
nb.fit(X_vec, labels)
preds = nb.predict(vectorizer.transform(['new email text']))
`

**Common Mistakes:**
- Applying GaussianNB to count data (use MultinomialNB)
- Not smoothing ? zero probability for unseen feature-class combos
- Assuming Naive Bayes outputs well-calibrated probabilities

**Interview Question:**
- *Q:* Why does Naive Bayes still work well even when independence is violated? *A:* It's a special case of a linear classifier — the decision boundary can be correct even if probabilities are poorly estimated.

---

### 1.7 K-Nearest Neighbors (KNN)

**What it is:** Non-parametric, instance-based learning — predicts by majority vote (classif.) or average (regr.) of k nearest neighbors.

**Why it exists:** No training phase; adapts to arbitrary decision boundaries.

**How it works:**
- **Distance metrics:** Euclidean, Manhattan, Minkowski, Cosine similarity
- **KD-tree / Ball-tree:** Spatial data structures to speed up neighbor search (O(log n) instead of O(n))
- **Curse of Dimensionality:** In high dimensions, all points become equally distant — distance metrics lose meaning

**When to use:** Low-dimensional data, small datasets, non-linear boundaries, lazy learning needed.

**When NOT:** High-dimensional data (>20 dims), large datasets (slow inference), need fast prediction.

**Code:**
`python
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

knn = KNeighborsClassifier(n_neighbors=5, metric='euclidean', weights='distance')
knn.fit(X_scaled, y_train)
print(f'Accuracy: {knn.score(X_scaled_test, y_test):.3f}')
`

**Common Mistakes:**
- Not scaling features (Euclidean distance dominated by large-scale features)
- Odd k for binary classification to avoid ties
- Using k=1 (overfits) or k too large (underfits)

**Interview Question:**
- *Q:* How do you choose k? *A:* Cross-validation. Small k ? low bias, high variance. Large k ? high bias, low variance. Rule of thumb: k ˜ sqrt(n).

---

### 1.8 K-Means Clustering

**What it is:** Partitions data into K clusters by minimizing within-cluster variance.

**Why it exists:** Simple, fast unsupervised learning for discovering groups.

**How it works:**
1. Initialize K centroids (random or k-means++ initialization)
2. Assign each point to nearest centroid
3. Update centroids as mean of assigned points
4. Repeat 2–3 until convergence

- **Elbow Method:** Plot inertia (WCSS) vs K — look for 'elbow' inflection point
- **Silhouette Score:** (b - a) / max(a, b) where a = mean intra-cluster dist, b = mean nearest-cluster dist. Range [-1, 1]

**When to use:** Spherical clusters of similar size, exploratory analysis, image compression.

**When NOT:** Non-spherical clusters, varying densities, outliers present, categorical data.

**Code:**
`python
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

kmeans = KMeans(n_clusters=3, init='k-means++', n_init=10, random_state=42)
labels = kmeans.fit_predict(X)
print(f'Inertia: {kmeans.inertia_:.2f}')
print(f'Silhouette: {silhouette_score(X, labels):.3f}')
`

**Common Mistakes:**
- Assuming clusters are spherical (use DBSCAN for arbitrary shapes)
- Not scaling features
- Choosing K without domain knowledge

**Interview Question:**
- *Q:* How does k-means++ improve initialization? *A:* Chooses centroids with probability proportional to squared distance from nearest existing centroid ? more spread out, faster convergence, better clusters.

---

### 1.9 PCA (Principal Component Analysis)

**What it is:** Linear dimensionality reduction that finds orthogonal directions of maximum variance.

**Why it exists:** Reduces dimensionality while preserving variance; removes multicollinearity; visualization.

**How it works:**
1. Center the data (subtract mean)
2. Compute covariance matrix
3. Eigen-decomposition: eigenvalues = variance explained, eigenvectors = principal components
4. Project data onto top-k eigenvectors

- **Explained Variance:** ?_i / S ?_j — fraction of total variance captured
- **Whitening:** Transform to have identity covariance (decorrelates + unit variance)

**When to use:** Visualization (2D/3D), noise reduction, preprocessing before other ML, multicollinearity.

**When NOT:** Non-linear manifolds (use t-SNE, UMAP), interpretability needed (components are linear combos), outliers present.

**Code:**
`python
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

X_scaled = StandardScaler().fit_transform(X)
pca = PCA(n_components=0.95)  # retain 95% variance
X_pca = pca.fit_transform(X_scaled)
print(f'Components: {pca.n_components_}')
print(f'Explained variance ratio: {pca.explained_variance_ratio_}')
`

**Common Mistakes:**
- Not scaling before PCA (variables with larger variance dominate)
- Assuming PCA components have semantic meaning
- Using PCA on sparse data (truncated SVD is better)

**Interview Question:**
- *Q:* PCA vs t-SNE vs UMAP? *A:* PCA is linear, fast, deterministic. t-SNE is non-linear, stochastic, preserves local structure (good for visualization). UMAP is faster than t-SNE, better global structure preservation.

---

### 1.10 Bias-Variance Tradeoff

**What it is:** The fundamental tradeoff in ML — models must balance underfitting (high bias) and overfitting (high variance).

**How it works:**
- **Total Error = Bias² + Variance + Irreducible Error**
  - **Bias:** Error from wrong assumptions (underfitting — too simple)
  - **Variance:** Error from sensitivity to training data (overfitting — too complex)
  - **Irreducible Error:** Noise inherent in data

**Cross-Validation:**
- **K-Fold:** Split into K folds, train on K-1, validate on 1, repeat K times
- **Stratified K-Fold:** Preserve class proportions in each fold
- **LOO-CV:** K = N (computationally expensive)

| Model Complexity | Bias | Variance | Test Error |
|:----------------:|:----:|:--------:|:----------:|
| Too Simple | High | Low | High |
| Optimal | Low | Low | Min |
| Too Complex | Low | High | High |

**When to consider:** Always — it's the central diagnostic in ML.

**Code:**
`python
from sklearn.model_selection import cross_val_score, KFold
from sklearn.tree import DecisionTreeRegressor
import numpy as np

max_depths = range(1, 21)
cv_scores = []

for d in max_depths:
    model = DecisionTreeRegressor(max_depth=d)
    scores = cross_val_score(model, X, y, cv=5, scoring='neg_mean_squared_error')
    cv_scores.append(-scores.mean())

best_depth = max_depths[np.argmin(cv_scores)]
print(f'Optimal depth: {best_depth}')
`

**Interview Question:**
- *Q:* How do you diagnose high bias vs high variance? *A:* High bias ? train error is high (model can't fit). High variance ? train error is low, validation error is much higher (model memorizes).

---

### 1.11 Feature Engineering

**Scaling:**
| Method | Formula | When |
|--------|---------|------|
| StandardScaler | (x - µ) / s | Normally distributed data |
| MinMaxScaler | (x - min) / (max - min) | Bounded data, neural nets |
| RobustScaler | (x - median) / IQR | Outliers present |
| MaxAbsScaler | x / max| x | | Sparse data |

**Encoding:**
- **One-Hot:** Nominal categories (K columns for K categories)
- **Label:** Ordinal categories (1, 2, 3...)
- **Target Encoding:** Replace category with mean target (watch for leakage!)
- **Binary:** Encode as binary digits (fewer columns than OHE)

**Polynomial Features:** [x1, x2] ? [x1, x2, x1², x2², x1x2]

**Feature Selection:**
| Method | Description |
|--------|-------------|
| Filter (correlation, mutual info) | Rank features independently of model |
| Wrapper (RFE, forward selection) | Train model, select features iteratively |
| Embedded (Lasso, tree importance) | Selection built into training |

**Code:**
`python
from sklearn.preprocessing import StandardScaler, OneHotEncoder, PolynomialFeatures
from sklearn.feature_selection import SelectKBest, mutual_info_classif
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

numeric_features = ['age', 'income', 'score']
categorical_features = ['city', 'country']

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), numeric_features),
    ('cat', OneHotEncoder(drop='first'), categorical_features)
])

pipeline = Pipeline([
    ('preprocess', preprocessor),
    ('poly', PolynomialFeatures(degree=2, interaction_only=True)),
    ('select', SelectKBest(mutual_info_classif, k=20)),
    ('clf', LogisticRegression())
])
`

**Common Mistakes:**
- Target encoding with target leakage (use cross-fold target encoding)
- Applying polynomial features before scaling
- Feature selection on the full dataset before train/test split

**Interview Question:**
- *Q:* When would you use target encoding? *A:* High-cardinality categorical features (>100 categories) where one-hot would create too many dimensions. Must use cross-fold encoding to avoid leakage.

---

### 1.12 Ensemble Methods

**What it is:** Combine multiple models to produce a stronger model.

**Why it exists:** Reduces variance (bagging), bias (boosting), or both (stacking).

**Bagging (Bootstrap Aggregating):**
- Train models in parallel on bootstrap samples
- Average predictions (regression) or majority vote (classification)
- Example: **Random Forest**

**Boosting:**
- Train models sequentially, each correcting previous errors
- **AdaBoost:** Weight misclassified samples more
- **XGBoost:** Gradient boosting with regularization, parallelization, tree-pruning, handling missing values
- **LightGBM:** Leaf-wise tree growth (faster, lower memory), GOSS (Gradient-based One-Side Sampling), EFB (Exclusive Feature Bundling)
- **CatBoost:** Handles categorical features natively, ordered boosting

**Stacking:**
- Train base models (level-0), then a meta-model (level-1) on their predictions
- Uses cross-validation to generate meta-features (prevents leakage)

**Code:**
`python
import xgboost as xgb
import lightgbm as lgb

# XGBoost
xgb_model = xgb.XGBClassifier(
    n_estimators=100, max_depth=6, learning_rate=0.1,
    subsample=0.8, colsample_bytree=0.8, reg_lambda=1.0
)
xgb_model.fit(X_train, y_train)

# LightGBM
lgb_model = lgb.LGBMClassifier(
    n_estimators=100, num_leaves=31, learning_rate=0.1,
    subsample=0.8, colsample_bytree=0.8
)
lgb_model.fit(X_train, y_train)
`

**Common Mistakes:**
- Boosting without early stopping (overfits)
- Too many estimators without monitoring validation performance
- Stacking with leakage (meta-features from same data used to train base models)

**Interview Question:**
- *Q:* XGBoost vs LightGBM vs CatBoost differences? *A:* XGBoost: level-wise growth, strong regularization. LightGBM: leaf-wise (faster), GOSS, handles large data best. CatBoost: native categorical handling, ordered boosting, robust to default hyperparams.

---

### 1.13 Evaluation Metrics

**Classification:**

| Metric | Formula | When to Use |
|--------|---------|-------------|
| **Accuracy** | (TP+TN)/(TP+TN+FP+FN) | Balanced classes |
| **Precision** | TP/(TP+FP) | Minimize false positives (spam) |
| **Recall** | TP/(TP+FN) | Minimize false negatives (cancer) |
| **F1-Score** | 2*P*R/(P+R) | Imbalanced, equal weight on P&R |
| **ROC-AUC** | Area under TPR vs FPR curve | Ranking quality, balanced eval |
| **PR-AUC** | Area under Prec vs Recall curve | Imbalanced classes |
| **Log Loss** | -S y log(y) + (1-y)log(1-y) | Probability calibration |
| **Cohen's Kappa** | Agreement beyond chance | Multi-class, imbalanced |

**Regression:**

| Metric | Formula | When |
|--------|---------|------|
| **MSE** | S(y-y)² / n | Penalize large errors |
| **RMSE** | vMSE | Same unit as target |
| **MAE** | S|y-y| / n | Robust to outliers |
| **R²** | 1 - SS_res / SS_tot | Proportion of variance explained |
| **MAPE** | S|(y-y)/y| / n * 100% | Relative error |

**Confusion Matrix:**
`
              Predicted
              Pos    Neg
Actual Pos    TP     FN
       Neg    FP     TN
`

**Code:**
`python
from sklearn.metrics import (accuracy_score, precision_score, recall_score,
                             f1_score, roc_auc_score, confusion_matrix,
                             mean_squared_error, r2_score)

# Classification
print(f'Accuracy:  {accuracy_score(y_test, preds):.3f}')
print(f'Precision: {precision_score(y_test, preds):.3f}')
print(f'Recall:    {recall_score(y_test, preds):.3f}')
print(f'F1:        {f1_score(y_test, preds):.3f}')
print(f'ROC-AUC:   {roc_auc_score(y_test, probs):.3f}')
print(f'CM:\\n{confusion_matrix(y_test, preds)}')

# Regression
print(f'RMSE: {mean_squared_error(y_test, preds, squared=False):.3f}')
print(f'R²:   {r2_score(y_test, preds):.3f}')
`

**Common Mistakes:**
- Using accuracy on imbalanced data (99% accuracy with 99:1 ratio is meaningless)
- Comparing models on a single metric (always use multiple)
- Not using stratified sampling in cross-validation for imbalanced data

**Interview Question:**
- *Q:* When is ROC-AUC misleading? *A:* Highly imbalanced datasets (AUC can be high while precision is poor). Use PR-AUC instead.

---

## SECTION 2: DEEP LEARNING

---

### 2.1 Neural Networks

**What it is:** Layers of interconnected neurons (perceptrons) with non-linear activations, capable of approximating any function (Universal Approximation Theorem).

**Why it exists:** Overcomes limitations of linear models; learns hierarchical representations.

**How it works internally:**

**Perceptron:** output = activation(w·x + b)

**Activation Functions:**

| Function | Formula | Range | Pros | Cons |
|----------|---------|-------|------|------|
| **Sigmoid** | 1/(1+e??) | (0, 1) | Smooth, probabilistic | Vanishing gradient, not zero-centered |
| **Tanh** | (e?-e??)/(e?+e??) | (-1, 1) | Zero-centered | Vanishing gradient |
| **ReLU** | max(0, x) | [0, 8) | Cheap, no vanish | Dying ReLU |
| **Leaky ReLU** | max(ax, x) | (-8, 8) | Fixes dying ReLU | Extra hyperparam a |
| **GELU** | x·F(x) | ˜(-0.17, 8) | Smooth, SOTA (GPT/BERT) | More expensive |
| **Softmax** | e??/Se?? | (0, 1) | Multi-class probs | For output layer only |

**Forward Pass:** z^[l] = W^[l] a^[l-1] + b^[l], ^[l] = g^[l](z^[l])

**Backward Pass (Backpropagation):** Chain rule to compute gradients:
`
?L/?W^[l] = a^[l-1]^T · d^[l]
d^[l] = (W^[l+1]^T d^[l+1]) ? g'^[l](z^[l])
`

**Vanishing Gradient:** Deep networks with sigmoid/tanh ? gradients near 0 in early layers ? no learning. Fix: ReLU, residual connections, batch norm.

**Code:**
`python
import torch
import torch.nn as nn

class MLP(nn.Module):
    def __init__(self, input_dim, hidden_dims, output_dim):
        super().__init__()
        layers = []
        prev_dim = input_dim
        for h_dim in hidden_dims:
            layers.extend([
                nn.Linear(prev_dim, h_dim),
                nn.BatchNorm1d(h_dim),
                nn.ReLU(),
                nn.Dropout(0.3)
            ])
            prev_dim = h_dim
        layers.append(nn.Linear(prev_dim, output_dim))
        self.net = nn.Sequential(*layers)

    def forward(self, x):
        return self.net(x)

model = MLP(input_dim=784, hidden_dims=[512, 256, 128], output_dim=10)
`

**Common Mistakes:**
- Using sigmoid in hidden layers (vanishing gradient)
- No normalization of inputs (activations saturate)
- Not monitoring gradient norms during training

**Interview Question:**
- *Q:* Why does ReLU not saturate? *A:* Gradient is 1 for positive inputs (constant, non-vanishing). Gradient is 0 for negative ? dying ReLU, fixed by Leaky ReLU.

---

### 2.2 Convolutional Neural Networks (CNNs)

**What it is:** Neural networks that use convolution operations to process grid-structured data (images).

**Why it exists:** Exploits spatial locality, translation invariance, parameter sharing vs fully-connected.

**Key Operations:**

| Operation | Description |
|-----------|-------------|
| **Convolution** | Sliding dot product of kernel over input |
| **Pooling** | Downsample (max, average) — reduces spatial dims |
| **Padding** | Add border pixels to preserve spatial size (same vs valid) |
| **Stride** | Step size of convolution (>1 downsamples) |

**Feature Maps:** output_size = (input_size - kernel_size + 2*padding) / stride + 1

**Architectures:**

| Model | Year | Key Innovation | Parameters |
|-------|------|---------------|------------|
| **LeNet-5** | 1998 | First modern CNN | 60k |
| **AlexNet** | 2012 | ReLU, Dropout, GPU training | 60M |
| **VGG16/19** | 2014 | Very deep (16-19 layers), 3x3 conv only | 138M |
| **Inception-v1** | 2014 | Inception modules (parallel conv of diff sizes) | 7M |
| **ResNet** | 2015 | Residual connections (skip connections) ? 152 layers | 25.6M |
| **DenseNet** | 2017 | Dense connections (each layer connected to all later) | 8M |
| **EfficientNet** | 2019 | Compound scaling (depth, width, resolution) | 5.3M–66M |

**Code:**
`python
import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2, stride=2),
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(128, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(),
            nn.AdaptiveAvgPool2d((1, 1))
        )
        self.classifier = nn.Linear(256, num_classes)

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        return self.classifier(x)
`

**Common Mistakes:**
- Using stride = pooling instead of combined (information loss)
- Not using batch norm after conv layers
- Too aggressive pooling early on

**Interview Question:**
- *Q:* Why does ResNet use skip connections? *A:* Solves vanishing gradient by providing a gradient shortcut. Allows training very deep networks (>100 layers). Helps with the 'degradation problem' — deeper nets perform worse without res connections.

---

### 2.3 RNNs & LSTMs

**What it is:** Neural networks with recurrent connections for sequential data.

**Why it exists:** Handle variable-length sequences, capture temporal dependencies.

**RNN:**
- Hidden state: h_t = tanh(W_hh·h_{t-1} + W_xh·x_t + b_h)
- Output: y_t = W_hy·h_t + b_y
- **Vanishing/Exploding gradient** for long sequences

**LSTM (Long Short-Term Memory):**
- **Forget gate:** _t = s(W_f·[h_{t-1}, x_t] + b_f) — what to discard
- **Input gate:** i_t = s(W_i·[h_{t-1}, x_t] + b_i) — what to update
- **Candidate:** C~_t = tanh(W_C·[h_{t-1}, x_t] + b_C) — new values
- **Cell state:** C_t = f_t ? C_{t-1} + i_t ? C~_t — memory
- **Output gate:** o_t = s(W_o·[h_{t-1}, x_t] + b_o) — what to output
- **Hidden state:** h_t = o_t ? tanh(C_t)

**GRU (Gated Recurrent Unit):** Simplified LSTM — combines forget/input gates, merges cell/hidden state.

**Bidirectional RNNs:** Process sequence forward + backward ? captures context from both directions.

**When to use:** Time series, text (before Transformers), audio, any sequential data.

**When NOT:** Very long sequences (Transformers better), non-sequential data.

**Code:**
`python
import torch.nn as nn

class LSTMModel(nn.Module):
    def __init__(self, vocab_size, embed_dim=256, hidden_dim=512, num_layers=2, num_classes=2):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(
            embed_dim, hidden_dim, num_layers=num_layers,
            batch_first=True, bidirectional=True, dropout=0.3
        )
        self.classifier = nn.Linear(hidden_dim * 2, num_classes)

    def forward(self, x):
        x = self.embedding(x)
        lstm_out, (hn, cn) = self.lstm(x)
        out = torch.cat((hn[-2], hn[-1]), dim=1)
        return self.classifier(out)
`

**Common Mistakes:**
- Not masking padding in sequences
- Using RNN for very long sequences without attention
- Initializing hidden state as zeros (often suboptimal)

**Interview Question:**
- *Q:* Why do LSTMs work better than vanilla RNNs? *A:* LSTM has a cell state with additive updates (controlled by gates), allowing gradients to flow through time without exploding/vanishing (constant error carousel).

---

### 2.4 Transformers

**What it is:** Architecture based entirely on attention mechanisms, no recurrence.

**Why it exists:** Parallelizable (vs sequential RNNs), handles long-range dependencies, SOTA for NLP and beyond.

**Core Concepts:**

**Scaled Dot-Product Attention:**
`
Attention(Q, K, V) = softmax(QK^T / vd_k) V
`
- Q (query), K (key), V (value) — all derived from input
- vd_k scaling prevents softmax saturation (small gradients)

**Multi-Head Attention:**
- Project Q, K, V into h subspaces, compute attention in each, concatenate
- Captures different relationship types

**Positional Encoding:** Sinusoidal (fixed) or learned — encodes sequence position:
`
PE(pos, 2i)   = sin(pos / 10000^{2i/d_model})
PE(pos, 2i+1) = cos(pos / 10000^{2i/d_model})
`

**Transformer Block:**
1. Multi-Head Attention (+ residual connection + layer norm)
2. Feed-Forward (MLP) (+ residual connection + layer norm)
3. FFN: FFN(x) = max(0, xW1 + b1)W2 + b2 (ReLU or GELU)

**Encoder-Decoder:**
- **Encoder:** Bidirectional self-attention ? full context
- **Decoder:** Masked self-attention (can't look ahead) + cross-attention (encoder outputs)

**Code (Minimal):**
`python
import torch.nn as nn

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, n_heads):
        super().__init__()
        assert d_model % n_heads == 0
        self.d_k = d_model // n_heads
        self.n_heads = n_heads
        self.w_q = nn.Linear(d_model, d_model)
        self.w_k = nn.Linear(d_model, d_model)
        self.w_v = nn.Linear(d_model, d_model)
        self.w_o = nn.Linear(d_model, d_model)

    def forward(self, x, mask=None):
        B, T, D = x.shape
        Q = self.w_q(x).view(B, T, self.n_heads, self.d_k).transpose(1, 2)
        K = self.w_k(x).view(B, T, self.n_heads, self.d_k).transpose(1, 2)
        V = self.w_v(x).view(B, T, self.n_heads, self.d_k).transpose(1, 2)

        attn = Q @ K.transpose(-2, -1) / (self.d_k ** 0.5)
        if mask is not None:
            attn = attn.masked_fill(mask == 0, float('-inf'))
        attn = attn.softmax(dim=-1)

        out = (attn @ V).transpose(1, 2).contiguous().view(B, T, D)
        return self.w_o(out)

class TransformerBlock(nn.Module):
    def __init__(self, d_model, n_heads, d_ff, dropout=0.1):
        super().__init__()
        self.attention = MultiHeadAttention(d_model, n_heads)
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.ffn = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.GELU(),
            nn.Dropout(dropout),
            nn.Linear(d_ff, d_model),
            nn.Dropout(dropout)
        )
        self.dropout = nn.Dropout(dropout)

    def forward(self, x, mask=None):
        x = x + self.dropout(self.attention(self.norm1(x), mask))
        x = x + self.dropout(self.ffn(self.norm2(x)))
        return x
`

**Common Mistakes:**
- Not masking padding tokens in attention
- Forgetting residual connections (model won't train deep)
- Using very small d_k without scaling

**Interview Question:**
- *Q:* Why is self-attention O(n²) and how do you handle long sequences? *A:* QK^T computes n×n matrix. Solutions: sparse attention (Longformer, BigBird), linear attention (Performer), FlashAttention (memory-efficient exact attention).

---

### 2.5 Transfer Learning

**What it is:** Leveraging knowledge from a pre-trained model on a new, related task.

**Why it exists:** Labeled data is expensive; pre-trained models capture general features.

**Approaches:**
| Method | Freeze | Train | When |
|--------|--------|-------|------|
| **Feature Extraction** | Entire base | Classifier only | Small dataset, same domain |
| **Fine-tuning** | Early layers | Later layers + classifier | Medium dataset |
| **Full fine-tuning** | None | All layers | Large dataset, different domain |
| **Progressive unfreezing** | Gradual unfreeze | Layer by layer | Balance stability |

**Domain Adaptation:** Adapt model from source domain (labeled) to target domain (unlabeled/minimally labeled).

**Code:**
`python
import torchvision.models as models
import torch.nn as nn

# Load pre-trained ResNet
resnet = models.resnet50(pretrained=True)

# Freeze all layers
for param in resnet.parameters():
    param.requires_grad = False

# Replace classifier
num_features = resnet.fc.in_features
resnet.fc = nn.Sequential(
    nn.Linear(num_features, 256),
    nn.ReLU(),
    nn.Dropout(0.3),
    nn.Linear(256, num_classes)
)

# Only classifier will train
optimizer = torch.optim.Adam(resnet.fc.parameters(), lr=0.001)
`

**Common Mistakes:**
- Not adjusting learning rate (fine-tuning needs lower LR: 1e-5 to 1e-4)
- Fine-tuning when dataset is too small (overfits)
- Not normalizing inputs to match pre-training statistics

**Interview Question:**
- *Q:* When to freeze vs fine-tune? *A:* Freeze when target dataset < 1K samples per class. Fine-tune when > 10K. In between: fine-tune only top layers. Always use lower LR for fine-tuning.

---

### 2.6 Regularization

**Why it exists:** Prevent overfitting — model memorizes training data instead of generalizing.

| Method | What it does | Math / Mechanics |
|--------|-------------|------------------|
| **Dropout** | Randomly drop neurons during training | _j ~ Bernoulli(p), _j = a_j · r_j / (1-p) |
| **Batch Norm** | Normalize activations: zero mean, unit variance | y = ?·(x-µ_B)/s_B + ß (learnable ?, ß) |
| **Layer Norm** | Normalize across features (not batch) | Used in Transformers |
| **Weight Decay** | Add L2 penalty to loss | L' = L + ½?||W||² |
| **Early Stopping** | Stop training when val loss plateaus | Monitor val loss, patience rounds |
| **Data Augmentation** | Generate synthetic training examples | Random crop, flip, rotation, color jitter |
| **Label Smoothing** | Soften targets [0, 1] ? [e, 1-e] | Prevents overconfidence |
| **Mixup** | Linear interpolation of input + label pairs | x' = ?x_i + (1-?)x_j, y' = ?y_i + (1-?)y_j |

**Code:**
`python
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(784, 512),
    nn.BatchNorm1d(512),
    nn.ReLU(),
    nn.Dropout(0.3),
    nn.Linear(512, 256),
    nn.LayerNorm(256),
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(256, 10)
)

# Weight decay via optimizer
optimizer = torch.optim.AdamW(model.parameters(), lr=0.001, weight_decay=0.01)

# Early stopping (manual)
best_val_loss = float('inf')
patience = 5
epochs_no_improve = 0
for epoch in range(100):
    train_loss = train_one_epoch(model, loader)
    val_loss = validate(model, val_loader)
    if val_loss < best_val_loss:
        best_val_loss = val_loss
        epochs_no_improve = 0
        torch.save(model.state_dict(), 'best_model.pt')
    else:
        epochs_no_improve += 1
        if epochs_no_improve >= patience:
            print('Early stopping!')
            break
`

**Common Mistakes:**
- Dropout too high during training (loss increases, model underfits)
- Batch norm with small batch size (<16) — noisy statistics
- Weight decay too high ? weights vanish, model underfits

**Interview Question:**
- *Q:* Batch norm vs Layer norm? *A:* Batch norm normalizes across batch dimension (depends on batch size). Layer norm normalizes across feature dimension (independent of batch). Layer norm is preferred for Transformers and RNNs where batch norm is impractical.

---

### 2.7 Optimizers

**Why they exist:** Minimize the loss function by updating model parameters.

| Optimizer | Update Rule | Key Property |
|-----------|-------------|--------------|
| **SGD** | ? ? ? - a?L | Simple, stable |
| **Momentum** |  ? ßv - a?L, ? ? ? + v | Accelerates, damps oscillations |
| **NAG** |  ? ßv - a?L(?+ßv), ? ? ? + v | 'Look ahead' Nesterov |
| **AdaGrad** | ? ? ? - a/(vG+e)?L | Adaptive per-param LR, G accumulates squared grads |
| **RMSprop** | ? ? ? - a/(vv+e)?L,  ? ßv + (1-ß)(?L)² | Fixes AdaGrad's decaying LR |
| **Adam** | Maintains running avg of grad (m) + squared grad (v). Bias correction. | Default choice |
| **AdamW** | Adam + decoupled weight decay | Separates weight decay from LR (better generalization) |

**Adam Update:**
`
m_t = ß1·m_{t-1} + (1-ß1)·g_t              (first moment)
v_t = ß2·v_{t-1} + (1-ß2)·g_t²             (second moment)
m^_t = m_t / (1-ß1?),  v^_t = v_t / (1-ß2?)   (bias correction)
?_t = ?_{t-1} - a·m^_t / (vv^_t + e)          (update)
`

**Learning Rate Scheduling:**

| Scheduler | Behavior |
|-----------|----------|
| **Step Decay** | Reduce LR by factor every N epochs |
| **Cosine Annealing** | Cosine curve from LR0 to 0 |
| **Cosine w/ Warm Restarts** | Periodic cosine cycles (SGDR) |
| **Linear Warmup** | Gradually increase LR from 0 to target |
| **Reduce on Plateau** | Reduce when metric stops improving |

**Code:**
`python
import torch.optim as optim
from torch.optim.lr_scheduler import CosineAnnealingLR, ReduceLROnPlateau

optimizer = optim.AdamW(model.parameters(), lr=0.001, weight_decay=0.01)
scheduler = CosineAnnealingLR(optimizer, T_max=50, eta_min=1e-6)
scheduler2 = ReduceLROnPlateau(optimizer, mode='min', factor=0.5, patience=3)

for epoch in range(100):
    train(...)
    val_loss = validate(...)
    scheduler.step()
    scheduler2.step(val_loss)
`

**Common Mistakes:**
- Using default Adam LR (0.001) for fine-tuning (too high)
- Not using learning rate scheduling
- Using Adam for all problems (SGD + momentum can generalize better for CV)

**Interview Question:**
- *Q:* Adam vs SGD? *A:* Adam: faster convergence, adaptive LR, less tuning. SGD + momentum: better generalization (flatter minima), more sensitive to LR tuning. Rule: start with Adam, switch to SGD with momentum for final push.

---

### 2.8 Loss Functions

| Loss | Formula | Use Case |
|------|---------|----------|
| **MSE** | (y - y)² | Regression |
| **MAE** | |y - y| | Regression, robust to outliers |
| **Huber** |  .5·d² if |diff|<d else d·(|diff|-0.5·d) | Hybrid MSE/MAE |
| **Cross-Entropy** | -y log(y) - (1-y)log(1-y) (binary) | Classification |
| **Categorical CE** | -S y_i log(y_i) | Multi-class |
| **KL Divergence** | S P(i) log(P(i)/Q(i)) | Distribution matching |
| **Contrastive Loss** | y*d² + (1-y)*max(margin-d, 0)² | Siamese networks |
| **Triplet Loss** | max(d(a,p) - d(a,n) + margin, 0) | Face recognition, embeddings |
| **Focal Loss** | -(1-y)^? log(y) | Imbalanced detection (RetinaNet) |
| **Dice Loss** | 1 - 2TP/(2TP+FP+FN) | Segmentation |

**Code:**
`python
import torch.nn as nn
import torch.nn.functional as F

ce_loss = nn.CrossEntropyLoss()
mse_loss = nn.MSELoss()

class ContrastiveLoss(nn.Module):
    def __init__(self, margin=1.0):
        super().__init__()
        self.margin = margin
    def forward(self, output1, output2, label):
        dist = F.pairwise_distance(output1, output2)
        loss = label * dist.pow(2) + (1 - label) * F.relu(self.margin - dist).pow(2)
        return loss.mean()

class TripletLoss(nn.Module):
    def __init__(self, margin=0.2):
        super().__init__()
        self.margin = margin
    def forward(self, anchor, positive, negative):
        pos_dist = F.pairwise_distance(anchor, positive)
        neg_dist = F.pairwise_distance(anchor, negative)
        loss = F.relu(pos_dist - neg_dist + self.margin)
        return loss.mean()
`

**Common Mistakes:**
- Using MSE for classification (wrong gradients)
- Not handling class imbalance in CE (use weighted CE or focal loss)
- Triplet loss with poorly chosen triplets (use hard negative mining)

**Interview Question:**
- *Q:* Cross-entropy vs KL divergence? *A:* Cross-entropy = H(P, Q) = H(P) + KL(P||Q). Minimizing CE is equivalent to minimizing KL when P is fixed (one-hot labels). KL measures 'extra bits' needed to encode P using Q's distribution.

---

### 2.9 Autoencoders & VAEs

**Autoencoder:** Learns compressed representation (latent code) by reconstructing input.
- **Encoder:** z = f_?(x) (compress)
- **Decoder:** x^ = g_f(z) (reconstruct)
- **Loss:** L = ||x - x^||² (reconstruction error)

**VAE (Variational Autoencoder):** Probabilistic autoencoder that learns a continuous latent distribution.
- Encoder outputs µ and s (parameters of Gaussian)
- Latent: z = µ + s · e where e ~ N(0, I) (reparameterization trick)
- Loss: L = Reconstruction + KL(N(µ, s²) || N(0, I))
- KL term encourages latent space to be standard Gaussian

**When to use:** Dimensionality reduction, anomaly detection, denoising, generative modeling.

**Code:**
`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class VAE(nn.Module):
    def __init__(self, input_dim=784, latent_dim=32):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, 512), nn.ReLU(),
            nn.Linear(512, 256), nn.ReLU()
        )
        self.mu_head = nn.Linear(256, latent_dim)
        self.logvar_head = nn.Linear(256, latent_dim)
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 256), nn.ReLU(),
            nn.Linear(256, 512), nn.ReLU(),
            nn.Linear(512, input_dim), nn.Sigmoid()
        )

    def encode(self, x):
        h = self.encoder(x)
        return self.mu_head(h), self.logvar_head(h)

    def reparameterize(self, mu, logvar):
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std

    def forward(self, x):
        mu, logvar = self.encode(x)
        z = self.reparameterize(mu, logvar)
        return self.decoder(z), mu, logvar

    def loss(self, x, recon, mu, logvar):
        recon_loss = F.binary_cross_entropy(recon, x, reduction='sum')
        kl_loss = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
        return recon_loss + kl_loss, recon_loss, kl_loss
`

**Common Mistakes:**
- KL annealing (gradually increase KL weight) — otherwise posterior collapse
- Using too high latent dimension (VAE ignores prior)
- Not using the reparameterization trick (can't backprop through sampling)

**Interview Question:**
- *Q:* What is the reparameterization trick? *A:* Instead of z ~ N(µ, s²) (non-differentiable sampling), write z = µ + s·e, e ~ N(0,I). Gradients can flow through µ and s, enabling backprop.

---

## SECTION 3: NATURAL LANGUAGE PROCESSING

---

### 3.1 Tokenization

**What it is:** Splitting text into smaller units (tokens) — words, subwords, or characters.

**Why it exists:** Neural nets can't process raw text; need fixed vocabulary mapping.

**Approaches:**

| Method | How it works | Examples |
|--------|-------------|----------|
| **Word-level** | Split on whitespace/punctuation | 'hello world' ? ['hello', 'world'] |
| **Character-level** | Each character is a token | 'hello' ? ['h','e','l','l','o'] |
| **BPE (Byte-Pair Encoding)** | Merge most frequent char pairs iteratively | GPT: 50k vocab |
| **WordPiece** | Similar to BPE but merges by likelihood score | BERT: 30k vocab |
| **SentencePiece** | Language-agnostic; treats input as raw bytes | T5, XLNet, ALBERT |
| **Unigram LM** | Probabilistic; removes tokens that minimize loss | XLNet, ALBERT |

**BPE Algorithm:**
1. Start with character vocabulary
2. Count all adjacent token pairs
3. Merge the most frequent pair
4. Repeat until desired vocab size

**Code:**
`python
from transformers import AutoTokenizer

# BERT WordPiece
bert_tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
tokens = bert_tokenizer.tokenize('Hello, how are you?')
print(tokens)  # ['hello', ',', 'how', 'are', 'you', '?']

ids = bert_tokenizer.encode('Hello, how are you?')
print(ids)     # [101, 7592, 1010, 2129, 2024, 2017, 1029, 102]

# GPT-2 BPE
gpt_tokenizer = AutoTokenizer.from_pretrained('gpt2')
tokens = gpt_tokenizer.tokenize('Hello, how are you?')
print(tokens)  # ['Hello', ',', ' how', ' are', ' you', '?']
`

**Common Mistakes:**
- Using word-level tokenization for morphologically rich languages (Turkish, Finnish)
- Not adding special tokens [CLS], [SEP], [PAD], [MASK]
- Tokenizer-vocab mismatch between train and inference

**Interview Question:**
- *Q:* BPE vs WordPiece? *A:* BPE merges by frequency; WordPiece merges by likelihood (maximizing loss reduction). WordPiece tends to produce more meaningful subwords.

---

### 3.2 Word Embeddings

**What it is:** Dense vector representations of words (vs sparse one-hot).

**Why it exists:** Dense vectors capture semantic similarity; 'king - man + woman ˜ queen'.

| Method | Approach | Key Property |
|--------|----------|-------------|
| **Word2Vec (CBOW)** | Predict word from context | Fast training |
| **Word2Vec (Skip-gram)** | Predict context from word | Better for rare words |
| **GloVe** | Matrix factorization of co-occurrence counts | Global statistics |
| **FastText** | Word2Vec + subword n-grams | Handles OOV, morphologically rich |
| **Contextual (BERT, GPT)** | Dynamic embeddings based on context | Different vector per usage context |

**GloVe Math:** w_i^T · w~_j + b_i + b~_j = log(X_ij) where X is co-occurrence matrix.

**Contextual vs Static:**
`python
from transformers import BertModel, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

text = 'The bank of the river.'
inputs = tokenizer(text, return_tensors='pt')
with torch.no_grad():
    outputs = model(**inputs)
bank_embedding = outputs.last_hidden_state[0, 2]

text2 = 'I need to go to the bank.'
inputs2 = tokenizer(text2, return_tensors='pt')
with torch.no_grad():
    outputs2 = model(**inputs2)
bank_embedding2 = outputs2.last_hidden_state[0, 6]  # different 'bank'
`

**Common Mistakes:**
- Using static embeddings for polysemous words ('bank', 'cell')
- Not fine-tuning embeddings for domain-specific tasks
- Using small embedding dimensions (typically 100-300 for static, 768+ for contextual)

**Interview Question:**
- *Q:* Why are contextual embeddings better than static? *A:* Same word in different contexts gets different vectors (polysemy). BERT's 'bank' near 'river' differs from 'bank' near 'money'. Static embeddings give the same vector everywhere.

---

### 3.3 Sequence Models (RNN, LSTM, GRU, Seq2Seq, Attention)

**Seq2Seq (Encoder-Decoder):**
- **Encoder:** Processes input sequence ? context vector (final hidden state)
- **Decoder:** Generates output sequence from context vector

**Bahdanau Attention:**
- Instead of compressing entire input into one vector, decoder attends to relevant encoder states at each step
- Attention score: e_ij = v^T tanh(W·h_j + U·s_{i-1})
- Attention weights: a_ij = softmax(e_ij)
- Context vector: c_i = S a_ij · h_j

**Luong Attention:** Simplified multiplicative score: e_ij = s_i^T · h_j

**Code (Seq2Seq with Attention):**
`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class Attention(nn.Module):
    def __init__(self, hidden_dim):
        super().__init__()
        self.W = nn.Linear(hidden_dim, hidden_dim)
        self.U = nn.Linear(hidden_dim, hidden_dim)
        self.v = nn.Linear(hidden_dim, 1)

    def forward(self, decoder_hidden, encoder_outputs):
        src_len = encoder_outputs.shape[1]
        decoder_hidden = decoder_hidden.unsqueeze(1).repeat(1, src_len, 1)
        energy = torch.tanh(self.W(decoder_hidden) + self.U(encoder_outputs))
        attention = self.v(energy).squeeze(-1)
        return F.softmax(attention, dim=1)
`

**Common Mistakes:**
- Using attention without masking padding positions
- Not using teacher forcing (or mixing) during decoder training
- Input feeding (passing previous attention to current step) forgotten

**Interview Question:**
- *Q:* Attention vs self-attention? *A:* Attention: decoder queries encoder (cross-attention). Self-attention: queries, keys, values all from same sequence. Transformers use self-attention in encoder/decoder + cross-attention in decoder.

---

### 3.4 BERT & Variants

**BERT (Bidirectional Encoder Representations from Transformers):**

**Pre-training Objectives:**
1. **Masked LM (MLM):** Mask 15% of tokens, predict masked tokens
   - 80% ? [MASK], 10% ? random, 10% ? unchanged
2. **Next Sentence Prediction (NSP):** Predict if sentence B follows sentence A

**Input Format:** [CLS] tok1 tok2 ... [SEP] tok3 tok4 ... [SEP]

**Variants:**

| Model | Innovation | Parameters |
|-------|-----------|------------|
| **BERT-base** | Baseline | 110M |
| **BERT-large** | Larger | 340M |
| **RoBERTa** | More data, longer training, no NSP, dynamic masking | 125M–355M |
| **DistilBERT** | Knowledge distillation ? 40% smaller, 60% faster, 97% performance | 66M |
| **ALBERT** | Factorized embeddings + cross-layer parameter sharing | 12M–235M |
| **ELECTRA** | Replaced token detection (discriminator) instead of MLM | 110M–335M |
| **DeBERTa** | Disentangled attention + enhanced mask decoder | 86M–1.5B |
| **SpanBERT** | Mask contiguous spans, span boundary objective | 110M–340M |

**Code:**
`python
from transformers import BertForSequenceClassification, BertTokenizer, Trainer

model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=2)
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Tokenize
inputs = tokenizer(
    ['This is great!', 'Terrible product.'],
    padding=True, truncation=True, max_length=128, return_tensors='pt'
)

# Fine-tune
trainer = Trainer(model=model, train_dataset=dataset, eval_dataset=eval_dataset)
trainer.train()
`

**Common Mistakes:**
- Not setting max_length (memory explosion)
- Padding to max length when dynamic padding is possible
- Forgetting to use the same tokenizer as the pre-trained model

**Interview Question:**
- *Q:* Why was NSP removed in RoBERTa? *A:* NSP was found unhelpful — removing it or replacing with full-sentence ordering improves performance. RoBERTa uses SOP (Sentence Order Prediction) instead.

---

### 3.5 GPT & LLMs

**GPT (Generative Pre-trained Transformer):**

| Model | Year | Architecture | Parameters | Context Length |
|-------|------|-------------|------------|:--------------:|
| GPT-1 | 2018 | 12-layer decoder | 117M | 512 |
| GPT-2 | 2019 | 48-layer decoder | 1.5B | 1024 |
| GPT-3 | 2020 | 96-layer decoder | 175B | 2048 |
| GPT-3.5 / InstructGPT | 2022 | RLHF tuned | 175B | 4096 |
| GPT-4 | 2023 | MoE (rumored 8×220B) | ~1.76T | 8192–128K |
| GPT-4o | 2024 | Multimodal native | Unknown | 128K |
| DeepSeek-R1 | 2025 | MoE + RL | 671B (37B active) | 128K |

**Key Concepts:**

- **Autoregressive:** Predict next token given previous tokens: P(t) = ? P(t_i | t_{<i})
- **Prompt Engineering:** Crafting inputs to guide model output
  - Zero-shot: 'Translate to French: Hello'
  - Few-shot: Provide 2-3 examples in prompt
  - Chain-of-Thought (CoT): 'Let's think step by step'
- **In-Context Learning (ICL):** Model learns from examples in the prompt without weight updates
- **Instruction Tuning:** Fine-tune on (instruction, response) pairs
- **System Prompt:** Instruction-level control over model behavior

**Temperature & Sampling:**
`python
import torch

def sample_with_temperature(logits, temperature=1.0, top_k=0, top_p=0.9):
    logits = logits / temperature
    if top_k > 0:
        top_k_values, _ = torch.topk(logits, top_k)
        logits[logits < top_k_values[-1]] = float('-inf')
    if top_p < 1.0:
        sorted_logits, sorted_indices = torch.sort(logits, descending=True)
        cumulative_probs = torch.cumsum(torch.softmax(sorted_logits, dim=-1), dim=-1)
        sorted_indices_to_remove = cumulative_probs > top_p
        sorted_indices_to_remove[..., 1:] = sorted_indices_to_remove[..., :-1].clone()
        sorted_indices_to_remove[..., 0] = 0
        indices_to_remove = sorted_indices_to_remove.scatter(dim=-1, index=sorted_indices, src=sorted_indices_to_remove)
        logits[indices_to_remove] = float('-inf')
    probs = torch.softmax(logits, dim=-1)
    return torch.multinomial(probs, num_samples=1)
`

**Common Mistakes:**
- Using temperature=0 always (greedy ? repetitive, dull)
- Too long prompts (context window exceeded)
- Not handling tokenization edge cases (whitespace, special chars)

**Interview Question:**
- *Q:* How does GPT handle long-range dependencies? *A:* Self-attention is O(n²) limiting context length. Recent solutions: FlashAttention (memory-efficient), sliding window attention (Mistral), ALiBi (relative position bias), long-context fine-tuning (YaRN, NTK-aware scaling).

---

### 3.6 RLHF (Reinforcement Learning from Human Feedback)

**What it is:** Aligning LLMs with human preferences through reward-based learning.

**Why it exists:** LLMs trained on raw text can be unhelpful, harmful, or untruthful.

**Process:**
`
1. SFT (Supervised Fine-Tuning) -? 2. Reward Modeling -? 3. RL Optimization
`

**Step 1 — SFT:** Fine-tune on high-quality (instruction, response) pairs.

**Step 2 — Reward Model:**
- Train a separate model to predict human preference: R(x, y) where x = prompt, y = response
- Loss: L = -log(s(R(x, y_w) - R(x, y_l))) (y_w = preferred, y_l = less preferred)
- Usually initialized from SFT model

**Step 3 — PPO (Proximal Policy Optimization):**
`
Objective = E[R(x, y)] - ß · KL(p_? || p_ref)
`
- R(x, y): Reward model score
- KL penalty prevents policy from diverging too far from reference
- ß controls how much the model can change

**DPO (Direct Preference Optimization):** Simplifies RLHF by directly optimizing on preferences without a separate reward model:
`
L = -E[log s(ß log(p_?(y_w|x)/p_ref(y_w|x)) - ß log(p_?(y_l|x)/p_ref(y_l|x)))]
`

**Code (DPO Loss):**
`python
import torch.nn.functional as F

def dpo_loss(policy_logps, ref_logps, preferred_idx, beta=0.1):
    log_ratio = policy_logps - ref_logps
    preferred_ratio = log_ratio[preferred_idx]
    dispreferred_ratio = log_ratio[1 - preferred_idx]
    loss = -F.logsigmoid(beta * (preferred_ratio - dispreferred_ratio)).mean()
    return loss
`

**Common Mistakes:**
- Reward model overfitting (reward hacking — model exploits RM weaknesses)
- KL penalty too low ? catastrophic forgetting
- Poor quality human preference data

**Interview Question:**
- *Q:* PPO vs DPO? *A:* PPO requires training a separate reward model + online RL (complex, unstable). DPO directly optimizes policy from static preference data using a closed-form mapping between reward and optimal policy (simpler, no reward model needed).

---

### 3.7 RAG (Retrieval-Augmented Generation)

**What it is:** Combine information retrieval with LLM generation — retrieve relevant documents, then generate answer grounded in them.

**Why it exists:** LLMs have knowledge cutoffs + hallucinate. RAG provides fresh, verifiable context.

**Architecture:**
`
Query -? Retriever -? Retrieved Docs -? LLM -? Answer
                ?
          Document Store
              (Vector DB)
`

**Components:**

| Component | Role | Examples |
|-----------|------|----------|
| **Embedding Model** | Convert text to vectors for similarity search | text-embedding-3-small, BGE, E5 |
| **Vector Database** | Store + search embeddings efficiently | FAISS, Pinecone, Weaviate, Chroma |
| **Retriever** | Find top-k relevant docs | Dense (DPR, Contriever) or Sparse (BM25) |
| **Generator** | LLM that uses retrieved context | GPT-4, Llama 3, Claude |

**Hybrid Search:** Combine dense (semantic) + sparse (keyword) retrieval for best results.

**RAG Variants:**

| Variant | Description |
|---------|-------------|
| **Naive RAG** | Retrieve ? Generate |
| **Advanced RAG** | Pre-retrieval (query rewriting, HyDE), Post-retrieval (reranking, filtering) |
| **Modular RAG** | Search, memory, fusion, rewrite modules |
| **Self-RAG** | LLM decides whether to retrieve and which passages to use |
| **Corrective RAG** | Verify + correct retrieved passages before generation |

**Code:**
`python
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

embedder = SentenceTransformer('all-MiniLM-L6-v2')
docs = ['Paris is the capital of France.', 'Berlin is in Germany.']
doc_embeddings = embedder.encode(docs)
index = faiss.IndexFlatL2(doc_embeddings.shape[1])
index.add(np.array(doc_embeddings).astype('float32'))

query = 'What is the capital of France?'
query_embedding = embedder.encode([query])
_, indices = index.search(np.array(query_embedding).astype('float32'), k=3)
retrieved_docs = [docs[i] for i in indices[0]]
print(retrieved_docs)
`

**Common Mistakes:**
- Chunk size too large ? irrelevant context, exceeds context window
- Chunk size too small ? missing key information
- Not using reranker after retrieval (improves precision)
- Embedding model mismatch between indexing and query

**Interview Question:**
- *Q:* How to evaluate RAG quality? *A:* Retrieval metrics (recall@k, MRR, NDCG) and generation metrics (faithfulness, answer relevance, completeness). Use frameworks like RAGAS, TruLens.

---

### 3.8 Fine-Tuning

**Full Fine-Tuning:** Update all model parameters on downstream task.

**Parameter-Efficient Fine-Tuning (PEFT):**

| Method | How it works | Parameters Updated |
|--------|-------------|:-----------------:|
| **LoRA** | Low-rank adaptation: W = W0 + BA (B?R^{d×r}, A?R^{r×k}) | ~0.1-1% |
| **QLoRA** | LoRA + 4-bit quantization (NF4) + double quantization | ~0.1% |
| **AdaLoRA** | Adaptive rank allocation per layer | ~0.1-1% |
| **Prefix Tuning** | Learn virtual prefix tokens prepended to input | ~0.1% |
| **Prompt Tuning** | Learn soft prompts (no prefix, just input embeddings) | ~0.01% |
| **Adapter Layers** | Small bottleneck layers inserted between transformer layers | ~3-5% |
| **IA³** | Learn element-wise rescaling vectors (a, b, c) | ~0.01% |

**LoRA Math:**
- Original: h = W0 x (frozen)
- LoRA: h = W0 x + BA x (only B, A trained)
- Rank r (1-64): tradeoff between expressiveness and efficiency

**Code (LoRA with transformers):**
`python
from peft import LoraConfig, get_peft_model, TaskType
from transformers import AutoModelForCausalLM

model = AutoModelForCausalLM.from_pretrained('meta-llama/Llama-2-7b-hf')

lora_config = LoraConfig(
    r=8,
    lora_alpha=16,
    target_modules=['q_proj', 'v_proj', 'k_proj', 'o_proj'],
    lora_dropout=0.05,
    bias='none',
    task_type=TaskType.CAUSAL_LM
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
`

**When to use:**
- **Full fine-tuning:** Large dataset (>50K examples), compute available
- **LoRA:** Limited compute, need to swap tasks frequently
- **QLoRA:** Consumer GPU (24GB can fine-tune 65B models)
- **Prefix/Prompt tuning:** Very small adaptation, multi-task sharing

**Common Mistakes:**
- Overfitting PEFT on small datasets (use rank 8-16 for small data)
- Applying LoRA to all modules unnecessarily (target Q, K, V, O is usually sufficient)
- Not merging LoRA weights for inference (adds latency)

**Interview Question:**
- *Q:* Why does LoRA work? *A:* Fine-tuning has low 'intrinsic dimension' — the change in weights during fine-tuning can be approximated by a low-rank matrix. LoRA constrains the update to rank r, making it efficient.

---

### 3.9 Evaluation of LLMs

| Metric | What it measures | Formula / Method |
|--------|-----------------|------------------|
| **Perplexity** | Model uncertainty | PPL = exp(-1/N S log P(t_i)) |
| **BLEU** | N-gram overlap (precision) | Precision-based, brevity penalty |
| **ROUGE** | N-gram overlap (recall) | Recall-based, variants: ROUGE-1, -2, -L |
| **METEOR** | Precision + Recall + alignment | Synonym matching via WordNet |
| **BERTScore** | Semantic similarity via BERT | Cosine sim of BERT embeddings |
| **MoverScore** | Earth mover's distance on embeddings | Semantic distance |

**LLM-Specific Evaluation:**

| Benchmark | What it tests |
|-----------|---------------|
| **MMLU** | Multi-task language understanding (57 subjects) |
| **HellaSwag** | Commonsense reasoning (adversarial NLI) |
| **HumanEval / MBPP** | Code generation |
| **GSM8K** | Grade school math |
| **BIG-Bench** | 204 diverse tasks |
| **TruthfulQA** | Truthfulness |
| **Chatbot Arena** | Human preference Elo ratings |
| **AlpacaEval** | LLM-as-judge evaluation |

**Code:**
`python
from evaluate import load
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model = AutoModelForCausalLM.from_pretrained('gpt2')
tokenizer = AutoTokenizer.from_pretrained('gpt2')
inputs = tokenizer('Hello world', return_tensors='pt')
with torch.no_grad():
    outputs = model(**inputs, labels=inputs['input_ids'])
    ppl = torch.exp(outputs.loss)
print(f'Perplexity: {ppl:.2f}')

bleu = load('bleu')
predictions = ['the cat is on the mat']
references = [['the cat is on the mat']]
results = bleu.compute(predictions=predictions, references=references)
print(f'BLEU: {results[\"bleu\"]:.3f}')
`

**Common Mistakes:**
- Using BLEU for creative generation (penalizes valid alternatives)
- Perplexity doesn't correlate perfectly with human preference
- Benchmark contamination (test data in training set)

**Interview Question:**
- *Q:* Why is LLM evaluation hard? *A:* Language is open-ended. Many correct answers. Metrics like BLEU/ROUGE don't capture semantics. Human evaluation is expensive and inconsistent. LLM-as-judge has biases (position, verbosity).

---

## SECTION 4: COMPUTER VISION

---

### 4.1 Image Classification & Object Detection & Segmentation

**Approach:** CNN extracts features ? classifier predicts class.

**Object Detection:**

| Model | Type | Key Idea |
|-------|------|----------|
| **Faster R-CNN** | Two-stage | RPN proposes regions, then classify/regress |
| **YOLO (v1-v11)** | One-stage | Grid-based: predict boxes + classes in one pass |
| **SSD** | One-stage | Multi-scale feature maps ? multi-scale detection |
| **DETR** | Transformer | End-to-end object detection (no anchors, no NMS) |

**Code (YOLOv8):**
`python
from ultralytics import YOLO

model = YOLO('yolov8n.pt')
results = model('image.jpg')
boxes = results[0].boxes.xyxy
classes = results[0].boxes.cls
confidences = results[0].boxes.conf
`

**Segmentation:**

| Model | Type | Description |
|-------|------|-------------|
| **U-Net** | Semantic | Encoder-decoder with skip connections (biomedical) |
| **Mask R-CNN** | Instance | Faster R-CNN + mask head (per-instance masks) |
| **SAM (Segment Anything)** | Foundation | Promptable segmentation (points, boxes, text) |
| **DeepLab** | Semantic | Atrous convolution + ASPP |

**Code (U-Net style):**
`python
import torch.nn as nn

class ConvBlock(nn.Module):
    def __init__(self, in_ch, out_ch):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(in_ch, out_ch, 3, padding=1),
            nn.BatchNorm2d(out_ch), nn.ReLU(),
            nn.Conv2d(out_ch, out_ch, 3, padding=1),
            nn.BatchNorm2d(out_ch), nn.ReLU()
        )
    def forward(self, x): return self.conv(x)

class UNet(nn.Module):
    def __init__(self, in_ch=3, out_ch=1):
        super().__init__()
        self.enc1 = ConvBlock(in_ch, 64)
        self.pool = nn.MaxPool2d(2)
        self.enc2 = ConvBlock(64, 128)
        self.enc3 = ConvBlock(128, 256)
        self.enc4 = ConvBlock(256, 512)
        self.bottleneck = ConvBlock(512, 1024)
        self.up4 = nn.ConvTranspose2d(1024, 512, 2, stride=2)
        self.dec4 = ConvBlock(1024, 512)
        self.up3 = nn.ConvTranspose2d(512, 256, 2, stride=2)
        self.dec3 = ConvBlock(512, 256)
        self.up2 = nn.ConvTranspose2d(256, 128, 2, stride=2)
        self.dec2 = ConvBlock(256, 128)
        self.up1 = nn.ConvTranspose2d(128, 64, 2, stride=2)
        self.dec1 = ConvBlock(128, 64)
        self.out = nn.Conv2d(64, out_ch, 1)

    def forward(self, x):
        e1 = self.enc1(x)
        e2 = self.enc2(self.pool(e1))
        e3 = self.enc3(self.pool(e2))
        e4 = self.enc4(self.pool(e3))
        b = self.bottleneck(self.pool(e4))
        d4 = self.dec4(torch.cat([self.up4(b), e4], dim=1))
        d3 = self.dec3(torch.cat([self.up3(d4), e3], dim=1))
        d2 = self.dec2(torch.cat([self.up2(d3), e2], dim=1))
        d1 = self.dec1(torch.cat([self.up1(d2), e1], dim=1))
        return self.out(d1)
`

**Common Mistakes:**
- Not using data augmentation for detection/segmentation
- Anchor box tuning ignored for YOLO/SSD
- Fixed image size (use multi-scale training)

---

### 4.2 Image Generation

**GANs (Generative Adversarial Networks):**
- **Generator G:** Creates fake images from noise
- **Discriminator D:** Distinguishes real from fake
- Minimax game: min_G max_D E[log D(x)] + E[log(1 - D(G(z)))]

**Diffusion Models:**
- Forward: Gradually add noise to image (Markov chain)
- Reverse: Learn to denoise step by step
- Text conditioning via cross-attention
- **Stable Diffusion:** Latent diffusion — operate in VAE latent space (reduces compute)

**Key Difference:**
| GANs | Diffusion |
|------|-----------|
| Fast generation (1 forward pass) | Slow (50-1000 denoising steps) |
| Mode collapse (unstable training) | Stable training |
| Sharp images | High diversity |
| Lower diversity | Higher fidelity (SOTA) |

**Code (Diffusion sampling — simplified):**
`python
import torch

def ddpm_sample(model, scheduler, num_steps=50):
    x = torch.randn(1, 3, 64, 64)
    for t in reversed(range(num_steps)):
        t_tensor = torch.full((1,), t, dtype=torch.long)
        with torch.no_grad():
            noise_pred = model(x, t_tensor)
        x = scheduler.step(noise_pred, t, x).prev_sample
    return x
`

**Common Mistakes:**
- GAN training instability (use WGAN-GP, spectral norm)
- Overfitting discriminator (use label smoothing, dropout)
- Diffusion too many steps for inference (use DDIM for faster sampling)

**Interview Question:**
- *Q:* Why did diffusion models overtake GANs? *A:* Diffusion models have stable training, better mode coverage, and higher fidelity (no mode collapse). However, inference is slower — solved by latent diffusion (Stable Diffusion) and improved samplers (DDIM, DPM-Solver).

---

## SECTION 5: MLOPS

---

### 5.1 ML Pipeline

`
Data Source -? Validation -? Feature Engineering -? Train -? Evaluate -? Deploy -? Monitor
                                                                    ¦
                                                               Model Registry
`

| Stage | Tools | Description |
|-------|-------|-------------|
| **Data Validation** | Great Expectations, TF Data Validation | Check schema, stats, anomalies |
| **Training** | PyTorch, TensorFlow, XGBoost | Model training orchestration |
| **Evaluation** | MLflow, W&B | Metric tracking, model comparison |
| **Deployment** | Docker, Kubernetes, TorchServe, TF Serving | Model serving infrastructure |
| **Monitoring** | Prometheus, Grafana, WhyLabs | Drift, performance, uptime |

**Code (Pipeline with MLflow):**
`python
import mlflow

mlflow.set_experiment('my_project')

with mlflow.start_run():
    mlflow.log_param('model_type', 'RandomForest')
    mlflow.log_param('n_estimators', 200)
    model = RandomForestClassifier(n_estimators=200).fit(X_train, y_train)
    accuracy = model.score(X_test, y_test)
    mlflow.log_metric('accuracy', accuracy)
    mlflow.sklearn.log_model(model, 'model')
`

---

### 5.2 Model Serving

| Aspect | Batch | Real-time |
|--------|-------|-----------|
| **Latency** | Minutes to hours | Milliseconds to seconds |
| **Throughput** | High (bulk) | Variable |
| **Trigger** | Scheduled / Event | API call |
| **Infrastructure** | Spark, Airflow, Batch jobs | REST API, gRPC, serverless |

**REST vs gRPC vs ONNX:**

| Method | Pros | Cons |
|--------|------|------|
| **REST (JSON)** | Simple, universal | Large payload, serialization overhead |
| **gRPC (Protobuf)** | Fast binary protocol, streaming | Complex setup |
| **ONNX Runtime** | Cross-framework optimization, quantization | Limited op support |

**Code (FastAPI serving):**
`python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()
model = joblib.load('model.pkl')

class InputData(BaseModel):
    features: list[float]

@app.post('/predict')
def predict(data: InputData):
    X = np.array(data.features).reshape(1, -1)
    pred = model.predict(X)
    return {'prediction': int(pred[0])}
`

---

### 5.3 Feature Store & Experiment Tracking

**Feature Store** (Feast, Tecton):
- Centralized feature computation + serving
- **Online store** (Redis, DynamoDB) for real-time
- **Offline store** (S3, BigQuery) for training
- Point-in-time correct joins prevent data leakage

**Model Registry** (MLflow, DVC, W&B):
- Version models, track lineage
- Stage transitions: staging ? production ? archived
- Model metadata (metrics, dataset hash, hyperparams)

**Experiment Tracking** (MLflow, W&B, Neptune):
`python
import wandb

wandb.init(project='my_project', config={
    'learning_rate': 0.001,
    'architecture': 'ResNet50',
    'epochs': 100
})
config = wandb.config

for epoch in range(config.epochs):
    loss = train_one_epoch()
    wandb.log({'loss': loss, 'epoch': epoch})

wandb.finish()
`

**DVC (Data Version Control):**
`ash
dvc init
dvc add data/train.csv
git add data/train.csv.dvc .gitignore
git commit -m 'add training data'
dvc push
`

---

### 5.4 Deployment Strategies

| Strategy | Description | When |
|----------|-------------|------|
| **Shadow Deployment** | New model runs alongside old, outputs compared but not served | Low-risk validation |
| **Canary Deployment** | Route small % traffic to new model, gradually increase | Gradual rollout |
| **A/B Testing** | Two models deployed, traffic split, metrics compared | Business decision |
| **Blue-Green** | Two identical environments, switch instantly | Zero downtime |
| **Multi-Armed Bandit** | Adaptive traffic split based on performance | Automated optimization |

**Code (Canary with Kubernetes):**
`yaml
apiVersion: v1
kind: Service
metadata:
  name: model-svc
spec:
  selector:
    app: model
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: model-canary
spec:
  replicas: 1
  selector:
    matchLabels:
      app: model
      version: canary
  template:
    metadata:
      labels:
        app: model
        version: canary
    spec:
      containers:
      - name: model
        image: model:v2
`

---

### 5.5 Drift Detection

| Type | What changes | Detection Method |
|------|-------------|------------------|
| **Data Drift** | Input distribution changes | KS test, Chi-squared, PSI |
| **Concept Drift** | P(y|x) changes | Monitor accuracy, residual distribution |
| **Model Drift** | Model performance degrades | Actual vs predicted, response distribution |
| **Label Drift** | Label distribution changes | Monitor label frequencies |

**Monitoring Metrics:**
- **PSI:** S (P_i - Q_i) ln(P_i / Q_i) — drift magnitude
- **KS Statistic:** Max difference between cumulative distributions
- **Accuracy / F1 over time:** Rolling window monitoring

**Code (PSI computation):**
`python
import numpy as np

def calculate_psi(expected, actual, bins=10):
    expected_hist, _ = np.histogram(expected, bins=bins, range=(0, 1))
    actual_hist, _ = np.histogram(actual, bins=bins, range=(0, 1))
    expected_pct = expected_hist / expected_hist.sum()
    actual_pct = actual_hist / actual_hist.sum()
    psi = np.sum((expected_pct - actual_pct) * np.log(expected_pct / actual_pct))
    return psi

psi_value = calculate_psi(training_preds, production_preds)
print(f'PSI: {psi_value:.3f}')
`

**Common Mistakes:**
- Checking drift weekly (too slow — real-time or hourly for critical systems)
- Not separating data drift from concept drift
- Alerting without actionable remediation

**Interview Question:**
- *Q:* Data drift vs Concept drift? *A:* Data drift: input features change (e.g., users get older). Concept drift: relationship between features and target changes (e.g., buying patterns after COVID). Both require retraining.

---

## SECTION 6: INTERVIEW QUESTIONS (100+)

---

### Junior Level (0-2 years)

<details>
<summary><b>Q1: What is the difference between supervised and unsupervised learning?</b></summary>

**Answer:** Supervised learning uses labeled data (X, y pairs) to learn a mapping from input to output. Examples: classification, regression. Unsupervised learning uses unlabeled data (X only) to discover hidden patterns. Examples: clustering, dimensionality reduction. The key difference is the presence of labels during training.
</details>

<details>
<summary><b>Q2: Explain gradient descent in simple terms.</b></summary>

**Answer:** Gradient descent is an optimization algorithm that iteratively moves in the direction of steepest descent (negative gradient) to find the minimum of a loss function. The step size is controlled by the learning rate. Think of it like rolling a ball downhill — it naturally goes toward the lowest point.
</details>

<details>
<summary><b>Q3: What is overfitting and how do you prevent it?</b></summary>

**Answer:** Overfitting occurs when a model learns the training data too well, including noise, but fails to generalize to new data. Prevention methods: cross-validation, regularization (L1/L2), pruning (for trees), dropout (for neural nets), early stopping, more training data, data augmentation.
</details>

<details>
<summary><b>Q4: What is the bias-variance tradeoff?</b></summary>

**Answer:** Total error = Bias² + Variance + Irreducible Error. High bias means underfitting (too simple, misses patterns). High variance means overfitting (too complex, captures noise). The goal is to find the sweet spot that minimizes total error on unseen data.
</details>

<details>
<summary><b>Q5: Explain the difference between L1 and L2 regularization.</b></summary>

**Answer:** L1 (Lasso) adds absolute value penalty ?|ß| ? produces sparse solutions (some weights become exactly zero, useful for feature selection). L2 (Ridge) adds squared penalty ?ß² ? shrinks weights uniformly but never to zero, better when all features are relevant. ElasticNet combines both.
</details>

<details>
<summary><b>Q6: How does a decision tree decide where to split?</b></summary>

**Answer:** By maximizing information gain (reduction in impurity). Common impurity measures: Gini impurity (1 - Sp_i²) and entropy (-Sp_i log2(p_i)). The algorithm tries each feature and threshold, picks the split that minimizes weighted impurity in child nodes.
</details>

<details>
<summary><b>Q7: What is the difference between bagging and boosting?</b></summary>

**Answer:** Bagging (e.g., Random Forest): Train models in parallel on bootstrap samples, combine by averaging/voting. Reduces variance. Boosting (e.g., XGBoost): Train models sequentially, each corrects previous errors. Reduces bias. Bagging is great for high-variance models; boosting for high-bias models.
</details>

<details>
<summary><b>Q8: Explain the confusion matrix.</b></summary>

**Answer:** A 2x2 table comparing actual vs predicted labels: TP (correct positives), TN (correct negatives), FP (false positives — Type I), FN (false negatives — Type II). From it we derive accuracy, precision, recall, F1, and specificity.
</details>

<details>
<summary><b>Q9: What is the difference between precision and recall?</b></summary>

**Answer:** Precision = TP/(TP+FP) — of all positive predictions, how many were correct. Recall = TP/(TP+FN) — of all actual positives, how many were found. Precision is 'how accurate are your positive predictions,' recall is 'how many positives did you capture.'
</details>

<details>
<summary><b>Q10: What is the F1 score?</b></summary>

**Answer:** The harmonic mean of precision and recall: 2 * (P*R)/(P+R). It's balanced — unlike arithmetic mean, a low P or R drags F1 down significantly. Best for imbalanced classification.
</details>

<details>
<summary><b>Q11: What is cross-validation and why use it?</b></summary>

**Answer:** K-fold CV: split data into K folds, train on K-1, validate on 1, repeat K times, average results. It evaluates model performance more reliably than a single train/test split because every data point is used for both training and validation.
</details>

<details>
<summary><b>Q12: Explain the ROC curve and AUC.</b></summary>

**Answer:** ROC plots TPR (recall) vs FPR across thresholds. AUC is area under this curve — 1.0 = perfect, 0.5 = random. AUC measures the model's ability to rank positive instances higher than negatives. It's threshold-independent.
</details>

<details>
<summary><b>Q13: What is feature scaling and when is it needed?</b></summary>

**Answer:** Scaling transforms features to similar ranges. Needed for: distance-based models (KNN, SVM, K-means), gradient descent (converges faster), regularization (L1/L2 penalize magnitude). Not strictly needed for tree-based models (they're scale-invariant).
</details>

<details>
<summary><b>Q14: How does k-means clustering work?</b></summary>

**Answer:** 1) Initialize K centroids. 2) Assign each point to nearest centroid. 3) Recompute centroids as mean of assigned points. 4) Repeat steps 2-3 until convergence. Minimizes within-cluster sum of squares (inertia).
</details>

<details>
<summary><b>Q15: How do you choose K in k-means?</b></summary>

**Answer:** Elbow method (plot inertia vs K, look for inflection point), silhouette score (higher = better), gap statistic, or domain knowledge.
</details>

<details>
<summary><b>Q16: What is PCA?</b></summary>

**Answer:** Principal Component Analysis finds orthogonal directions of maximum variance. Projects data onto top-k eigenvectors of covariance matrix. Used for dimensionality reduction, noise reduction, visualization. Components are linear combinations of original features.
</details>

<details>
<summary><b>Q17: Explain the difference between parametric and non-parametric models.</b></summary>

**Answer:** Parametric (e.g., linear regression): fixed number of parameters, makes strong assumptions about data distribution. Non-parametric (e.g., KNN, decision trees): parameters grow with data, no fixed form, more flexible but can overfit.
</details>

<details>
<summary><b>Q18: What is a perceptron?</b></summary>

**Answer:** The simplest neural network unit. Takes weighted sum of inputs + bias, applies step activation: output = 1 if w·x + b > 0 else 0. Can only learn linearly separable patterns. Building block of modern neural networks.
</details>

<details>
<summary><b>Q19: What is the difference between ReLU and sigmoid activation?</b></summary>

**Answer:** Sigmoid: S-shaped, outputs (0,1), smooth but saturates (vanishing gradient). ReLU: max(0,x), non-saturating for positive inputs, computationally cheap, but can 'die' (output always 0). ReLU is preferred for hidden layers in deep networks.
</details>

<details>
<summary><b>Q20: What is dropout?</b></summary>

**Answer:** A regularization technique that randomly 'drops' (sets to zero) a fraction of neurons during training. Prevents co-adaptation, forces the network to learn redundant representations. During inference, all neurons are used (scaled by dropout rate).
</details>

<details>
<summary><b>Q21: What is batch normalization?</b></summary>

**Answer:** Normalizes layer activations to zero mean, unit variance per batch. Reduces internal covariate shift, allows higher learning rates, acts as regularizer, reduces sensitivity to initialization. Learnable scale (?) and shift (ß) parameters restore expressiveness.
</details>

<details>
<summary><b>Q22: Explain the difference between SGD and Adam.</b></summary>

**Answer:** SGD: uses single learning rate, no adaptation, may oscillate. Adam: adaptive learning rates per parameter (momentum + RMSprop), bias-corrected, faster convergence, less hyperparameter tuning. Adam is default for most deep learning.
</details>

<details>
<summary><b>Q23: What is the difference between Type I and Type II errors?</b></summary>

**Answer:** Type I (False Positive): predicting positive when it's actually negative. Type II (False Negative): predicting negative when it's actually positive. Type I = false alarm, Type II = miss.
</details>

<details>
<summary><b>Q24: Explain one-hot encoding.</b></summary>

**Answer:** Converts categorical variable into binary columns. For K categories, creates K binary columns, each indicating presence (1) or absence (0) of that category. Avoids ordinal relationships, but increases dimensionality.
</details>

<details>
<summary><b>Q25: What is an outlier and how do you handle it?</b></summary>

**Answer:** Outliers are data points significantly different from others. Detection: Z-score (>3), IQR (below Q1-1.5IQR or above Q3+1.5IQR), DBSCAN. Handling: remove, cap (winsorize), transform (log), or use robust methods (tree-based models, Huber loss).
</details>

<details>
<summary><b>Q26: How do you handle missing data?</b></summary>

**Answer:** Removal (listwise/pairwise deletion), imputation (mean/median/mode, KNN, regression, MICE, forward-fill for time series), or model-based (algorithms that handle NaN natively like XGBoost). Best approach depends on missingness mechanism (MCAR, MAR, MNAR).
</details>

<details>
<summary><b>Q27: What is the central limit theorem?</b></summary>

**Answer:** The distribution of sample means approaches a normal distribution as sample size increases, regardless of the population distribution. Enables many statistical inference techniques including hypothesis testing and confidence intervals.
</details>

<details>
<summary><b>Q28: Explain p-value.</b></summary>

**Answer:** Probability of observing data as extreme as (or more extreme than) what we observed, assuming the null hypothesis is true. Low p-value (< 0.05) suggests evidence against null hypothesis. NOT the probability that the null is true.
</details>

<details>
<summary><b>Q29: What is the difference between correlation and causation?</b></summary>

**Answer:** Correlation means two variables move together. Causation means one variable directly causes a change in another. Correlation doesn't imply causation — there may be confounding variables or reverse causality.
</details>

<details>
<summary><b>Q30: How do you handle imbalanced datasets?</b></summary>

**Answer:** Multiple approaches: (1) Data-level: oversampling (SMOTE, ADASYN), undersampling (random, Tomek links), or hybrid. (2) Algorithm-level: class weights, focal loss, anomaly detection instead of classification. (3) Evaluation: use precision-recall AUC, F1, not accuracy. (4) Ensemble: bagging + boosting with resampling.
</details>

### Mid-Level (2-5 years)

<details>
<summary><b>Q31: Explain the kernel trick in SVM.</b></summary>

**Answer:** The kernel trick computes dot products in a high-dimensional feature space without explicitly mapping data there. K(x_i, x_j) = f(x_i)·f(x_j) where f is implicit. RBF kernel corresponds to infinite-dimensional feature space. Makes SVM non-linear while keeping optimization linear.
</details>

<details>
<summary><b>Q32: What is the curse of dimensionality?</b></summary>

**Answer:** As dimensions increase, data becomes sparse — all points are approximately equidistant, distance metrics lose meaning, needed sample size grows exponentially, and models overfit more easily. Affects KNN, clustering, and any distance-based method. Solution: dimensionality reduction or feature selection.
</details>

<details>
<summary><b>Q33: How does XGBoost handle missing values?</b></summary>

**Answer:** XGBoost learns the optimal direction to handle missing values at each split. During training, it tries putting all missing values to the left or right child and picks the direction with best loss reduction. No imputation needed.
</details>

<details>
<summary><b>Q34: Explain gradient boosting.</b></summary>

**Answer:** Sequential ensemble where each new tree fits the negative gradient (residuals) of the loss function. First tree predicts the mean, subsequent trees predict errors. Learning rate shrinks contribution of each tree. XGBoost/LightGBM add regularization, parallelization, and advanced splitting.
</details>

<details>
<summary><b>Q35: What is the difference between XGBoost, LightGBM, and CatBoost?</b></summary>

**Answer:** XGBoost: level-wise splitting, strong regularization (L1/L2), handles missing values. LightGBM: leaf-wise splitting (faster, can overfit), GOSS for faster training, EFB for categoricals. CatBoost: symmetric trees, ordered boosting (reduces target leakage), native categorical handling (no encoding needed).
</details>

<details>
<summary><b>Q36: How do you evaluate a clustering algorithm?</b></summary>

**Answer:** Internal metrics (no ground truth): silhouette score, Davies-Bouldin index, Calinski-Harabasz index, inertia (elbow). External metrics (with ground truth): adjusted Rand index (ARI), normalized mutual info (NMI), homogeneity/completeness. Also visual inspection.
</details>

<details>
<summary><b>Q37: Explain attention mechanism.</b></summary>

**Answer:** Attention computes weighted combination of values, where weights depend on query-key similarity. Allows model to 'focus' on relevant parts of input. In seq2seq, decoder queries encoder states to get context vector. Self-attention is attention within the same sequence.
</details>

<details>
<summary><b>Q38: What is self-attention and why is it powerful?</b></summary>

**Answer:** Self-attention computes attention where queries, keys, and values all come from the same sequence. Each token can directly attend to every other token (long-range dependencies). Unlike RNNs, it's parallelizable (no sequential processing). Complexity is O(n²) for sequence length n.
</details>

<details>
<summary><b>Q39: Explain multi-head attention.</b></summary>

**Answer:** Project Q, K, V into h subspaces (heads), compute attention in each, concatenate results. Each head can learn different relationship types (syntactic, semantic, positional). Allows model to attend to information from multiple representation subspaces.
</details>

<details>
<summary><b>Q40: Why do Transformers use positional encoding?</b></summary>

**Answer:** Self-attention is permutation-invariant (no inherent notion of order). Positional encoding adds position information. Sinusoidal encodings have benefits: no learned parameters, can extrapolate to unseen lengths, each position has unique encoding.
</details>

<details>
<summary><b>Q41: What is the difference between encoder-only and decoder-only models?</b></summary>

**Answer:** Encoder-only (BERT): bidirectional self-attention, excels at understanding tasks (classification, NER, QA). Decoder-only (GPT): autoregressive (left-to-right), excels at generation. Encoder-decoder (T5): both, good for seq2seq (translation, summarization).
</details>

<details>
<summary><b>Q42: Explain masked language modeling.</b></summary>

**Answer:** BERT's pre-training objective: randomly mask 15% of tokens, predict them from context. Bidirectional — model sees both left and right context. Forces model to learn deep language understanding, not just left-to-right patterns.
</details>

<details>
<summary><b>Q43: What is beam search?</b></summary>

**Answer:** A decoding algorithm that maintains top-K hypotheses at each step, expanding each and keeping the K most likely. Better than greedy (which may miss good sequences), but more expensive. K controls the tradeoff between quality and speed.
</details>

<details>
<summary><b>Q44: What is label smoothing?</b></summary>

**Answer:** Softens hard labels 0/1 to e/(K-1) and 1-e. Prevents model from becoming overconfident, improves generalization and calibration. Used in many SOTA models (Transformers, ResNet).
</details>

<details>
<summary><b>Q45: How does backpropagation work?</b></summary>

**Answer:** Backpropagation computes gradients of loss with respect to all weights using the chain rule. Forward pass computes predictions and loss. Backward pass propagates error gradients layer by layer: d^[l] = (W^{[l+1]}^T d^{[l+1]}) ? g'(z^[l]). Gradients are used to update weights.
</details>

<details>
<summary><b>Q46: What is the vanishing gradient problem?</b></summary>

**Answer:** In deep networks with sigmoid/tanh, gradients become very small in early layers (chain rule multiplies many derivatives < 1). Early layers learn very slowly or stop learning. Solutions: ReLU activations, residual connections, batch normalization, LSTM gates.
</details>

<details>
<summary><b>Q47: Explain residual connections.</b></summary>

**Answer:** Skip connections that add input to layer output: y = F(x) + x. Gradient can flow directly through the skip connection, bypassing layers. Enables training very deep networks (>100 layers) by mitigating vanishing gradient. Used in ResNet, Transformers.
</details>

<details>
<summary><b>Q48: What is weight decay and why is it used?</b></summary>

**Answer:** Weight decay adds L2 penalty to loss: L' = L + ½?||W||². During update: W ? W - a?L - a?W. Effectively shrinks weights toward zero, preventing overfitting. AdamW decouples weight decay from Adam's adaptive LR for better results.
</details>

<details>
<summary><b>Q49: Explain the difference between layer norm and batch norm.</b></summary>

**Answer:** Batch norm: normalize across batch dimension (depends on batch size). Layer norm: normalize across feature dimension (independent of batch). Layer norm works for any batch size (including 1), used in Transformers/RNNs. Batch norm is better for CNNs with large batches.
</details>

<details>
<summary><b>Q50: How does the GELU activation function work?</b></summary>

**Answer:** GELU = x · F(x) where F is standard Gaussian CDF. Approximated by  .5x(1 + tanh(v(2/p)(x + 0.044715x³))). Smooth, non-monotonic, and strictly increasing. Used in GPTs, BERT. Better than ReLU for some tasks (slightly better gradients, smoother).
</details>

<details>
<summary><b>Q51: How do you optimize hyperparameters?</b></summary>

**Answer:** Grid search (exhaustive, expensive), random search (better coverage), Bayesian optimization (GP-based, efficient), population-based training (scheduler + hyperparams together), Optuna/Hyperopt/SMAC libraries.
</details>

<details>
<summary><b>Q52: What is early stopping?</b></summary>

**Answer:** Stop training when validation performance stops improving for N epochs (patience). Prevents overfitting by saving the model at the best validation checkpoint. Combines well with other regularization.
</details>

<details>
<summary><b>Q53: Explain the concept of data leakage.</b></summary>

**Answer:** Information from outside the training set (e.g., test data or future data) influences the model, leading to overoptimistic performance. Common sources: scaling before train/test split, target encoding without cross-fold, feature selection on full data, time-series lookahead.
</details>

<details>
<summary><b>Q54: How do you detect multicollinearity?</b></summary>

**Answer:** Correlation matrix (>0.7 is concerning), Variance Inflation Factor (VIF > 5-10 indicates severe multicollinearity), condition number of covariance matrix. Handle via: remove correlated features, PCA, Ridge regression (handles it naturally), or Lasso (selects one).
</details>

<details>
<summary><b>Q55: What is the difference between LDA and PCA?</b></summary>

**Answer:** PCA: unsupervised, finds directions of max variance. LDA: supervised, finds directions that maximize class separation (between-class / within-class scatter). LDA is better for classification tasks; may use up to C-1 components (C = classes).
</details>

<details>
<summary><b>Q56: Explain t-SNE and its limitations.</b></summary>

**Answer:** t-SNE is a non-linear dimensionality reduction for visualization. It preserves local structure by making similar points close in 2D/3D. Limitations: stochastic (different runs give different results), doesn't preserve global structure well, can't embed new points (transductive), computationally expensive O(n²).
</details>

<details>
<summary><b>Q57: How does word2vec work?</b></summary>

**Answer:** CBOW: predict target word from context words. Skip-gram: predict context words from target word. Both are shallow neural nets, trained on large corpora. The learned weight matrix becomes word embeddings. Similar words have similar vectors.
</details>

<details>
<summary><b>Q58: What is the difference between CountVectorizer and TF-IDF?</b></summary>

**Answer:** CountVectorizer: raw term frequencies. TF-IDF: term frequency × inverse document frequency (downweights common words). TF-IDF gives higher weight to informative, rare words. Both convert text to sparse numerical vectors.
</details>

<details>
<summary><b>Q59: Explain the concept of 'cold start' in recommendation systems.</b></summary>

**Answer:** Cold start occurs when there's no data for new users or new items. Solutions: content-based filtering (use user/item attributes), hybrid approaches, or ask for initial preferences. For new items, use metadata features (genre, description, tags).
</details>

<details>
<summary><b>Q60: What is AUC and when is it misleading?</b></summary>

**Answer:** AUC measures the probability that a randomly chosen positive ranks higher than a random negative. Misleading when: (1) highly imbalanced (AUC high while precision low), (2) need well-calibrated probabilities, (3) false positives and false negatives have different costs. Use PR-AUC for imbalanced data.
</details>

<details>
<summary><b>Q61: How would you deploy a model to production?</b></summary>

**Answer:** 1) Package model (ONNX, pickle, TorchScript). 2) Create API (FastAPI, Flask, or gRPC). 3) Containerize (Docker). 4) Orchestrate (Kubernetes, ECS). 5) Add monitoring (Prometheus, Grafana). 6) Set up CI/CD (GitHub Actions, Jenkins). Include load testing and A/B testing infrastructure.
</details>

<details>
<summary><b>Q62: What is the difference between REST and gRPC for model serving?</b></summary>

**Answer:** REST: JSON over HTTP, human-readable, widely supported, but larger payloads, no streaming. gRPC: Protobuf binary, faster, supports streaming, strict typing, but more complex. gRPC is better for high-throughput, low-latency serving.
</details>

<details>
<summary><b>Q63: Explain the CAP theorem in the context of ML systems.</b></summary>

**Answer:** CAP: Consistency, Availability, Partition tolerance — pick 2. For ML feature stores: availability is critical (serving must work), eventual consistency is often acceptable (stale features for minutes). For model registry: consistency is important (which model version is deployed?).
</details>

<details>
<summary><b>Q64: What is model drift and how do you detect it?</b></summary>

**Answer:** Model drift is degradation of model performance over time due to data changes. Detect via: monitoring accuracy/F1 over time, PSI (population stability index), KS test on feature distributions, residual analysis. Set up automated alerts with thresholds.
</details>

<details>
<summary><b>Q65: Explain the difference between data drift and concept drift.</b></summary>

**Answer:** Data drift: P(X) changes (input distribution shifts). Concept drift: P(y|X) changes (relationship between features and target changes). E.g., after COVID, income distribution may shift (data drift), and spending patterns given income may change (concept drift).
</details>

<details>
<summary><b>Q66: How do you implement A/B testing for ML models?</b></summary>

**Answer:** 1) Split traffic between control (current model) and treatment (new model). 2) Ensure statistical significance (power analysis before, sequential testing during). 3) Monitor multiple metrics (primary: business metric, secondary: model metrics, guardrail: latency, cost). 4) Decide: deploy if treatment significantly better.
</details>

<details>
<summary><b>Q67: What is canary deployment?</b></summary>

**Answer:** Gradually roll out new model to a small % of traffic, monitor metrics, then increase if performance is good. Starts at 1-5%, progresses to 10-25-50-100%. Allows rollback if issues detected. Usually combined with automated rollback triggers.
</details>

<details>
<summary><b>Q68: Explain the difference between batch and real-time inference.</b></summary>

**Answer:** Batch: process many requests together (hours to daily). Efficient for large volumes, no latency requirement. Real-time: serve individual requests (ms to seconds). Needs low-latency infrastructure. Use case dependent: batch for recommendations, real-time for fraud detection.
</details>

<details>
<summary><b>Q69: Design an ML system for fraud detection.</b></summary>

**Answer:**
1. **Data pipeline:** Real-time streaming (Kafka) + batch processing (Spark). Features: transaction amount, velocity (txns/min), location distance, device fingerprint, user history.
2. **Model:** Ensemble: XGBoost (tabular features) + graph neural network (merchant connections) + RNN (transaction sequence). Two-stage: rule-based filter (quick reject/approve clear cases), ML model for uncertain.
3. **Training:** Hourly retraining with sliding window (7 days). Online learning for headroom. Class imbalance: use focal loss + weighted sampling.
4. **Serving:** Real-time gRPC, <100ms P99 latency. Feature store via Redis. Shadow deployment for new models.
5. **Monitoring:** Drift detection on feature distributions, alert if fraud rate deviates >2s. Human-in-loop review for flagged cases.
6. **Tradeoffs:** Latency vs accuracy — simpler model for real-time, deep model for delayed review queue.
</details>

<details>
<summary><b>Q70: How would you train a model on 1TB of data that doesn't fit in memory?</b></summary>

**Answer:**
1. **Out-of-core learning:** Use libraries that support partial-fit (SGDClassifier, Incremental PCA, xgboost with external memory).
2. **Streaming:** Read data in chunks (Pandas iterators, Dask, PySpark), train incrementally.
3. **Distributed training:** PyTorch DDP, Horovod, Spark ML. Data parallelism across multiple nodes.
4. **Subsampling:** If appropriate, use representative sample (stratified). 1TB ? often unnecessary for most models.
5. **Optimization:** Use memory-efficient formats (Parquet, Arrow), reduce dtype precision (float32 ? float16).
6. **Cloud solutions:** BigQuery ML, SageMaker, Vertex AI for petabyte-scale.
</details>

### Senior Level (5+ years)

<details>
<summary><b>Q71: Explain the FlashAttention algorithm.</b></summary>

**Answer:** FlashAttention computes exact attention with O(n²) IO complexity, not O(n²) memory. It tiles the Q, K, V matrices and computes attention in on-chip SRAM, avoiding slow GPU HBM reads/writes. Divides into blocks, computes partial softmax on-chip, writes result back. Up to 2-7x faster than standard attention.
</details>

<details>
<summary><b>Q72: How does GPT-4's Mixture of Experts architecture work?</b></summary>

**Answer:** MoE (Mixture of Experts): multiple 'expert' feed-forward networks, a gating network routes each token to top-k experts (typically 2). Only active experts are computed, so total computation is much less than parameter count. Allows more parameters without proportional compute cost. Tradeoffs: higher memory (all experts loaded), load balancing issues (some experts underused). Add auxiliary loss for balanced routing.
</details>

<details>
<summary><b>Q73: What is the difference between RLHF and DPO?</b></summary>

**Answer:** RLHF: 3 stages — SFT, train a reward model (RM) to predict human preferences, then optimize policy with PPO against RM. Complex, unstable, requires training RM + online RL. DPO: directly optimizes policy from static preference pairs using closed-form mapping between reward and optimal policy. No RM needed, simpler, more stable. DPO is 2024+ preferred approach.
</details>

<details>
<summary><b>Q74: How would you fine-tune a 70B model with limited GPU budget?</b></summary>

**Answer:**
1. **QLoRA:** 4-bit NF4 quantization + LoRA adapters. Reduces 70B to ~35GB memory.
2. **Gradient checkpointing:** Trade compute for memory (stores only selected activations).
3. **Paged optimizers (bitsandbytes):** Offload optimizer states to CPU.
4. **DeepSpeed ZeRO-3:** Shard model states across GPUs.
5. **FlashAttention:** Reduce memory for attention computation.
6. **Gradient accumulation:** Simulate larger batch size.
7. With 2x 24GB GPUs + QLoRA + DeepSpeed, you can fine-tune 70B.
</details>

<details>
<summary><b>Q75: Design a recommendation system for a video platform.</b></summary>

**Answer:**
1. **Recall (candidate generation):** Multiple towers — collaborative filtering (user-item matrix), content-based (embedding similarity), trend-based (popular in region), social (friends watched). Generate ~1000 candidates.
2. **Ranking:** Deep neural network with features: user (watch history, demographics, device), item (title embedding, category, duration, upload date), context (time, location, device). Use weighted logistic regression (watch time as weight).
3. **Re-ranking:** Diversity constraints (same creator only every N), freshness boost, personalization (show unseen content).
4. **Nearline:** Update user embeddings every hour via periodic batch.
5. **Online:** A/B test new rankers — canary ? shadow ? full. Monitor CTR, watch time, retention.
6. **Cold start:** Use content-based for new items (title/category embedding), popularity + exploration for new users.
</details>

<details>
<summary><b>Q76: Explain the 'reversal curse' in LLMs.</b></summary>

**Answer:** The reversal curse: LLMs can answer 'Who is Tom Cruise's mother?' (Mary Lee Pfeiffer) but NOT 'Who is Mary Lee Pfeiffer's son?' (Tom Cruise). Despite training on both directions, the model fails when query order is reversed. Shows LLMs don't have symmetric relational knowledge. Related to the unidirectional nature of next-token prediction training.
</details>

<details>
<summary><b>Q77: What is chain-of-thought prompting and why does it work?</b></summary>

**Answer:** CoT prompts the model to output intermediate reasoning steps before the answer (e.g., 'Let's think step by step'). Works because: (1) decomposes complex problems into simpler subproblems, (2) generates additional tokens that can be used as 'scratch space' for reasoning, (3) mimics human reasoning patterns. Boosts performance on math, logic, and multi-step reasoning tasks.
</details>

<details>
<summary><b>Q78: How would you evaluate a RAG system?</b></summary>

**Answer:** Three dimensions:
1. **Retrieval quality:** Recall@k, MRR, NDCG — does it find relevant documents?
2. **Generation quality:** Faithfulness (is output grounded in retrieved docs?), Answer relevance (does it answer the question?), Context recall (did context contain the answer?).
3. **End-to-end:** Answer accuracy (exact/match) + hallucination rate.
Frameworks: RAGAS, TruLens, DeepEval. Also human evaluation: helpfulness, harmlessness, honesty.
</details>

<details>
<summary><b>Q79: Explain the difference between hard and soft parameter sharing in multi-task learning.</b></summary>

**Answer:** Hard sharing: shared encoder + task-specific heads. Simpler, reduces overfitting (more data per shared layer), but may hurt if tasks conflict. Soft sharing: each task has its own parameters, with regularization encouraging similarity (e.g., L2 distance between layers). More flexible, handles conflicting tasks, but more parameters.
</details>

<details>
<summary><b>Q80: How would you detect and mitigate bias in ML models?</b></summary>

**Answer:**
1. **Define fairness metric:** Demographic parity, equal opportunity, equalized odds — they conflict, choose with stakeholders.
2. **Pre-processing:** Reweigh training data, resample to equalize representation, remove protected attributes.
3. **In-processing:** Add fairness constraint to loss function (adversarial debiasing, regularization).
4. **Post-processing:** Calibrate predictions per group, adjust decision thresholds.
5. **Monitoring:** Track metrics per subgroup in production. Measure disparate impact. Audit regularly.
</details>

<details>
<summary><b>Q81: What is the difference between positional encoding and relative positional encoding?</b></summary>

**Answer:** Absolute (sinusoidal/learned): each position gets a fixed vector. Doesn't generalize well to longer sequences. Relative (T5, ALiBi, RoPE): attention depends on relative distance between tokens, not absolute positions. Better length generalization. RoPE (Rotary Position Embedding) is used in GPT-4, Llama, Mistral — applies rotation to Q and K based on position.
</details>

<details>
<summary><b>Q82: How does speculative decoding work?</b></summary>

**Answer:** Speeds up LLM inference (2-3x) by using a small 'draft' model to generate K tokens in parallel, then the large 'target' model verifies them with a single forward pass. Accepts tokens where target agrees with draft. Can also use same model with early exit layers. Useful for latency-critical applications.
</details>

<details>
<summary><b>Q83: Design a real-time ML pipeline for an ad auction system.</b></summary>

**Answer:**
1. **Data:** User clicked on ad (positive) or didn't (negative). 100k+ QPS. Features: user embedding, ad embedding, context (hour, device, page). Online features via Flink (update per event).
2. **Model:** Wide & Deep or DLRM (Facebook). Predict CTR.
3. **Training:** Daily retraining on last 7 days, with online learning (FTRL + proximal) for real-time adaptation.
4. **Serving:** Cached user embeddings in Redis. Model on GPU with TF Serving or TensorRT. Target: <10ms P99.
5. **Auction integration:** Model predicts pCTR, multiplied by bid, used in auction.
6. **Monitoring:** Calibration (predicted CTR vs actual CTR per bucket), feature drift, latency. Automatic rollback if calibration drifts >20%.
</details>

<details>
<summary><b>Q84: Explain the concept of 'alignment tax' in LLMs.</b></summary>

**Answer:** Alignment tax refers to the performance degradation on certain tasks after RLHF/DPO alignment. Models may become less creative, less diverse, or perform worse on benchmarks (especially reasoning). Tradeoff: safety/harmlessness vs capability. Solutions: careful KL penalty tuning, mixing SFT + RLHF data, balanced training.
</details>

<details>
<summary><b>Q85: How does Group Relative Policy Optimization (GRPO) differ from PPO?</b></summary>

**Answer:** GRPO, used in DeepSeek-R1, is a more efficient RL algorithm for LLMs. Unlike PPO which uses a value network (critic) + policy network (actor), GRPO generates multiple completions for each prompt, scores them against a reward model, and normalizes advantages within the group. No critic network needed — saves compute. Also uses KL penalty via group-based constraints rather than per-token.
</details>

<details>
<summary><b>Q86: How would you build a multilingual LLM?</b></summary>

**Answer:**
1. **Tokenization:** Use SentencePiece with Unicode tokenization. Handle CJK (multi-byte), RTL languages. BPE over all languages, possibly upsampling low-resource languages.
2. **Data:** Collect diverse corpora (CommonCrawl, Wikipedia, books) in 100+ languages. Upsample low-resource languages 5-10x to prevent English dominance.
3. **Training:** Train from scratch or continue pre-training English model. Use language-specific adapters (LoRA per language).
4. **Evaluation:** Build multilingual benchmarks (M-MMLU, Flores, XNLI).
5. **Challenges:** Tokenization inefficiency for some languages (Korean script vs CJK), code-switching, cultural biases.
</details>

<details>
<summary><b>Q87: What is the difference between continual learning and fine-tuning?</b></summary>

**Answer:** Continual learning (CL) aims to learn new tasks without forgetting previous ones (catastrophic forgetting). Methods: replay buffers (store old data), regularization (EWC, SI — constrain weights), or dynamic architectures (growing networks). Fine-tuning focuses on performance on new task, accepting forgetting. CL is for scenarios where all tasks matter long-term.
</details>

<details>
<summary><b>Q88: How would you design a feature store?</b></summary>

**Answer:**
1. **Two stores:** Online (Redis, DynamoDB for real-time serving) and Offline (S3, BigQuery for training).
2. **Point-in-time correct joins:** Each training sample gets feature values as they existed at the time of the event (no future leakage).
3. **SDK:** Define features via Python API (Feast, Tecton). Batch + stream ingestion.
4. **Serving:** gRPC or HTTP endpoints, cached features with TTL (time-to-live).
5. **Governance:** Feature catalog, versioning, lineage. Data quality checks (null rates, distributions).
6. **Monitoring:** Feature drift, staleness, serving latency.
</details>

<details>
<summary><b>Q89: Explain the concept of 'context distillation' in LLMs.</b></summary>

**Answer:** Context distillation 'distills' the behavior of a system prompt + context into the model's weights. Generate synthetic data: a teacher model (with long context) answers queries, then fine-tune a student (no context) on those Q&A pairs. Result: student mimics teacher's behavior without needing the context at inference. Reduces latency/cost by removing long prompts.
</details>

<details>
<summary><b>Q90: How does data parallelism differ from model parallelism and pipeline parallelism?</b></summary>

**Answer:**
- **Data parallelism:** Same model on each GPU, split batch. All-reduce gradients. Easy, well-supported (DDP, FSDP).
- **Model parallelism:** Split layers across GPUs. Each GPU has part of the model. Needed when model doesn't fit on one GPU.
- **Pipeline parallelism:** Split model into stages, each GPU handles a stage. Micro-batches flow through pipeline. Higher throughput than model parallelism, but can have bubble overhead.
- **Hybrid:** 3D parallelism: Data + Pipeline + Tensor parallelism (Megatron-LM, DeepSpeed).
</details>

<details>
<summary><b>Q91: What is the 'bitter lesson' in AI research?</b></summary>

**Answer:** Rich Sutton's essay: general methods that leverage computation (search, learning, scaling) consistently outperform human-engineered methods in the long run. Examples: neural nets beat hand-crafted features, AlphaZero beats hand-crafted chess programs, scaling laws for LLMs beat specialized architectures. Lesson: don't engineer knowledge; build systems that learn from computation.
</details>

<details>
<summary><b>Q92: How would you implement a time-series forecasting system at scale?</b></summary>

**Answer:**
1. **Model:** MQTransformer (multi-horizon quantile) or Temporal Fusion Transformer for 100k+ time series. Decompose: trend + seasonality + events.
2. **Validation:** Time series CV (expanding/rolling window) — never use random shuffle.
3. **Feature engineering:** Lag features, rolling statistics (mean, std), calendar features, external regressors.
4. **Serving:** Batch forecasting each night (for next N days). Store in DB for API serving.
5. **Monitoring:** Forecast accuracy (MAPE, sMAPE) per series, residual analysis. Alert when accuracy drops.
6. **Challenges:** Hierarchical reconciliation (top-down + bottom-up consistency), new time series (cold start).
</details>

<details>
<summary><b>Q93: Explain the scaling laws for LLMs.</b></summary>

**Answer:** Kaplan et al. (2020): Model performance depends predictably on N (params), D (data), and C (compute). Optimal training: scale N and D together (doubling N ? double D). Chinchilla scaling (Hoffmann et al., 2022): models are undertrained — for compute budget C, optimal is roughly 20 tokens per parameter (not the Kaplan proportions). Most LLMs prior were overparameterized/undertrained. Scaling laws guide optimal allocation of compute.
</details>

<details>
<summary><b>Q94: What is the 'alignment faking' problem in RLHF?</b></summary>

**Answer:** Models learn to appear aligned during training while maintaining contradictory behavior. Example: model gives safe answers during RLHF training, but given a different context (or jailbreak prompt), reverts to unsafe behavior. Related to 'sycophancy' — agreeing with user even when wrong. Mitigations: diverse training data, red-teaming, constitutional AI, activation monitoring.
</details>

<details>
<summary><b>Q95: Design a semantic search system for a knowledge base.</b></summary>

**Answer:**
1. **Ingestion:** Chunk documents (500-1000 tokens, overlap 10-20%). Embed each chunk with bi-encoder (e.g., BGE-M3, text-embedding-3-large).
2. **Indexing:** Vector DB (FAISS, Qdrant, Weaviate). IVF or HNSW index for fast search. Multi-tenancy: separate index per tenant.
3. **Retrieval:** Hybrid search — dense (embedding cosine similarity) + sparse (BM25 keyword). Weighted combination (e.g., 0.7 dense + 0.3 sparse).
4. **Reranking:** Cross-encoder (e.g., Cohere rerank) on top-100 results. Slower but more accurate.
5. **Generation:** LLM answers from top-5 reranked chunks. Include citations (chunk ID, document title).
6. **Evaluation:** Hit rate, MRR, NDCG for retrieval. Faithfulness + relevance for generation.
</details>

<details>
<summary><b>Q96: How would you deploy a large language model in production efficiently?</b></summary>

**Answer:**
1. **Quantization:** FP16 ? INT8 ? FP4 (or NF4). Use AWQ/GPTQ for weight quantization, KV cache quantization for longer context.
2. **VLLM / TGI:** PagedAttention — manage KV cache more efficiently (avoids fragmentation), continuous batching, tensor parallelism.
3. **Speculative decoding:** 2-3x speedup with draft model.
4. **Serving:** Multi-node with tensor parallelism across GPUs, pipeline parallelism across nodes. Load balancer routes requests.
5. **Caching:** Semantic cache for common queries (similarity-based, skip generation for exact matches).
6. **Autoscaling:** Scale replicas based on queue depth. Fargate/Knative for serverless bursts.
7. **Monitoring:** Token throughput, latency (TTFT, TPOT), GPU utilization, queue depth, error rate.
</details>

<details>
<summary><b>Q97: How would you detect hallucinations in LLM outputs?</b></summary>

**Answer:**
1. **Confidence estimation:** Internal token-level probabilities (average log-prob, entropy). Low confidence = higher hallucination risk.
2. **Verification:** Query a separate model (or same model) to verify factual claims: 'Is the following statement true?'
3. **RAG + grounding:** Compare output to retrieved context. Check if each claim is supported by retrieved docs (verification model).
4. **Self-consistency:** Generate multiple outputs (varying temperature), check consistency. Hallucinated facts are less consistent.
5. **Entailment classifier:** Fine-tune an NLI model to check if output is entailed by the prompt/context.
6. **P-(True):** Ask the model to estimate probability that its answer is correct.
</details>

<details>
<summary><b>Q98: How would you build a model that learns to use tools (function calling)?</b></summary>

**Answer:**
1. **Data:** Collect (instruction, tool call, response) triples. Tools described in JSON schema (name, description, parameters).
2. **Fine-tuning:** Train model to output JSON blob with tool name + parameters. Format: <|tool_call|>{"name":"calculate","arguments":{"expr":"2+2"}}.
3. **Inference loop:** User query ? model ? if tool call ? execute tool ? append result ? model continues.
4. **Training data:** Self-play: sample queries, let model call tools, execute, collect successful trajectories. Filter and deduplicate.
5. **Challenges:** Tool choice accuracy (picking wrong tool), parameter formatting (wrong types), security (SQL injection via tool calls).
6. **Evaluation:** Tool call accuracy, completion rate (does it finish the task?), rejection rate (does it reject impossible tasks?).
</details>

<details>
<summary><b>Q99: Explain the 'Mixture of Agents' (MoA) architecture.</b></summary>

**Answer:** MoA layers multiple LLMs: each layer has several 'proposer' models that generate responses, then an 'aggregator' model synthesizes them. Models in later layers see outputs from previous layers. Achieves SOTA results on benchmarks by combining strengths of different models (specialization). Different from MoE (Mixture of Experts) which routes tokens within one model.
</details>

<details>
<summary><b>Q100: How would you implement a real-time fraud detection model with online learning?</b></summary>

**Answer:**
1. **Stream processing:** Kafka ? Flink ? feature computation (velocity, geolocation, device fingerprint).
2. **Online model:** FTRL-Proximal (Follow The Regularized Leader) — a linear model optimized for streaming. For non-linear: train XGBoost offline, use predictions + residual online model.
3. **Feature store:** Redis for latest feature values per user/device.
4. **Serving:** gRPC with <50ms P99. Model updated every batch (1-5 minutes) or per-minibatch.
5. **Exploration:** Epsilon-greedy — occasionally approve suspicious transactions to gather labels.
6. **Monitoring:** AUC, precision@k, expected vs observed fraud rate. Alert if accuracy drops or drift detected.
</details>

<details>
<summary><b>Q101: What is the 'abstention' capability in ML models?</b></summary>

**Answer:** Abstention allows a model to say 'I don't know' instead of making low-confidence predictions. Methods: selective classification (reject if max probability < threshold), entropy-based rejection, or train with a 'none of the above' class. Important for safety-critical applications (medical diagnosis, self-driving). Related to selective prediction and OOD detection.
</details>

<details>
<summary><b>Q102: How would you approach the problem of catastrophic forgetting in continual learning?</b></summary>

**Answer:**
1. **Replay buffer:** Store representative samples from previous tasks, interleave during training.
2. **Regularization:** EWC (Elastic Weight Consolidation) — penalize changes to important weights. SI (Synaptic Intelligence) — track per-parameter importance.
3. **Dynamic architectures:** Progressive Neural Networks — add new columns for new tasks, freeze old ones.
4. **Knowledge distillation:** Use old model as teacher, new model as student. Distill logits from previous tasks.
5. **Memory-aware synapses:** MAS (Memory Aware Synapses) — estimate parameter importance based on sensitivity of output.
6. **Bayesian approaches:** Maintain posterior distribution over weights, update with new data.
</details>

<details>
<summary><b>Q103: Explain the concept of 'mechanistic interpretability' in LLMs.</b></summary>

**Answer:** Mechanistic interpretability aims to reverse-engineer neural networks into human-understandable algorithms. Techniques: (1) Activation patching — intervene on specific neurons/layers to see effect on output. (2) Sparse autoencoders — decompose activations into interpretable features (e.g., 'the India feature' fires for India-related tokens). (3) Circuit analysis — trace how information flows through attention heads and MLPs (e.g., induction heads for in-context learning). Goal: understand how models actually work internally, not just what they output.
</details>

<details>
<summary><b>Q104: How would you design an LLM evaluation framework for a specific enterprise use case?</b></summary>

**Answer:**
1. **Define dimensions:** Accuracy (factual correctness), faithfulness (grounding in context), safety (no harmful outputs), tone/style (brand voice), latency, cost per query.
2. **Create eval dataset:** 500-1000 examples covering edge cases, adversarial inputs, happy path. Label with ground truth.
3. **Automated metrics:** Token-level (perplexity), semantic (BERTScore, NLI-based factuality), task-specific (exact match, F1).
4. **LLM-as-judge:** GPT-4/Claude evaluates outputs on criteria (scale 1-5). Calibrate against human judgments (Spearman >0.7).
5. **Red-teaming:** Automated adversarial testing (prompt injection, jailbreaks, OOD inputs).
6. **A/B test in production:** Shadow deployment, compare metrics. Track over time for drift.
7. **Human evaluation:** For subjective dimensions (helpfulness, tone). Use pairwise comparison (Elo rating).
8. **CI/CD integration:** Run eval suite on every model update. Gate deployment on passing thresholds.
</details>
