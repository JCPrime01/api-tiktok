  import express from 'express';                                                                                                                                                                            
  const app = express();                                                                                                                                                                                  
  app.use(express.json());                                                                                                                                                                                  
   
  app.post('/api/lead', async (req, res) => {                                                                                                                                                               
    const { userAgent, eventId } = req.body || {};                                                                                                                                                        
                                                                                                                                                                                                            
    try {
      await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {                                                                                                                           
        method: 'POST',                                                                                                                                                                                     
        headers: {
          'Content-Type': 'application/json',                                                                                                                                                               
          'Access-Token': process.env.TIKTOK_ACCESS_TOKEN                                                                                                                                                 
        },
        body: JSON.stringify({
          pixel_code: 'D8TF8VRC77U2JEPM6MO0',
          event: 'SubmitForm',                                                                                                                                                                              
          event_id: eventId,
          timestamp: new Date().toISOString(),                                                                                                                                                              
          context: {                                                                                                                                                                                      
            user_agent: userAgent,                                                                                                                                                                          
            ip: req.headers['x-forwarded-for'] || ''                                                                                                                                                      
          }                                                                                                                                                                                                 
        })
      });                                                                                                                                                                                                   
    } catch(err) {}                                                                                                                                                                                       

    res.json({ ok: true });                                                                                                                                                                                 
  });
                                                                                                                                                                                                            
  app.listen(process.env.PORT || 3000);
