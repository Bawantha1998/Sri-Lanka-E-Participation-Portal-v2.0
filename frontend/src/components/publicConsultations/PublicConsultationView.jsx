import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PublicConsultationbreadcrumb from "./PublicConsultationbreadcrumb";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FaxIcon from "@mui/icons-material/Fax";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Comment from "../Comment/Comment"

export default function PublicConsultationView() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={12}>
        <PublicConsultationbreadcrumb/>
        </Grid>
        <Grid
          container
          item
          sx={{ bgcolor: "#E8E8E8", width: "100%", height: "auto" }}
          marginLeft={2}
          marginTop={2}
          borderRadius={5}
        >
         
          
         
          <Grid item xs={12}>
            <Box marginLeft={3} marginTop={2} marginBottom={4}>
             
            Polyuria, daily output of an excessive amount of urine. In humans, polyuria involves the output of more than three liters of urine per day. Although characterized in part by needing to void more frequently, polyuria differs from frequent urination, since it also involves increased urine volume. Polyuria is a common symptom of both type 1 and type 2 diabetes.

The body produces urine through the filtration of blood by the kidneys. Specialized functional units in the kidneys known as nephrons filter initial urine from nutrients. Within nephrons, structures known as the glomerulus and renal tubules extract nutrients such as amino acids, electrolytes, and glucose, separating them from water and waste products. Waste products exit the body with water in the form of urine, while nutrients are returned to the bloodstream.

There are several causes of polyuria. These include polydipsia (excessive intake of fluids) and the intake of beverages containing caffeine or alcohol. Reduced production of antidiuretic hormone (ADH), which regulates reabsorption of water in the kidneys, can result in excessive urine production. Polyuria also occurs when the renal tubules suffer decreased sensitivity to ADH. A condition known as solute diuresis, which often occurs with diabetes, results from limited absorptive ability of the renal tubules. Thus, when excess amounts of certain solutes, such as electrolytes or sodium chloride, pass through the tubules, they pull water from the body, causing an increase in urine volume. Medications that act as diuretics, which are used to treat conditions such as high blood pressure and liver failure, also increase urination; indeed, diuretics are the most common cause of polyuria in adults. In addition to diabetes, other diseases and conditions are associated with polyuria. For example, polyuria often occurs in the context of hypercalcemia (excess calcium in the blood), pregnancy, kidney disease, and liver failure. It is also a symptom of the autoimmune disorders Sjögren syndrome and sarcoidosis.

Treatment for polyuria depends on the cause. For some persons, reducing intake of alcohol and caffeine can help with managing the condition. In patients with diabetes, symptoms of polyuria often improve when medication regimens are adjusted to better control diabetes.
              
            </Box>
          </Grid>
            <Comment/>
        </Grid>
      
      </Grid>
    </div>
  );
}

